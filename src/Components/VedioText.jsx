import React, { useRef, useState, useEffect } from "react";

const CanvasWithTools = () => {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState("freehand"); // freehand, line, straightLine, curve
  const [shapes, setShapes] = useState([]); // كل عنصر: { tool, points: [...] }
  const [currentPoints, setCurrentPoints] = useState([]); // نقاط الشكل الجاري رسمه
  const [dragShapeIndex, setDragShapeIndex] = useState(null);
  const [dragPointIndex, setDragPointIndex] = useState(null);
  const [drawing, setDrawing] = useState(false);

  // رسم كل الأشكال + الشكل الجاري
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // دالة رسم شكل معين
    const drawShape = (shape, isCurrent = false) => {
      const { tool, points } = shape;
      if (points.length === 0) return;

      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      if (tool === "freehand") {
        ctx.beginPath();
        points.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = isCurrent ? "blue" : "darkblue";
        ctx.stroke();
      }

      if (tool === "line") {
        if (points.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);
        ctx.strokeStyle = isCurrent ? "green" : "darkgreen";
        ctx.stroke();
      }

      if (tool === "straightLine") {
        if (points.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[1].x, points[1].y);
        ctx.strokeStyle = isCurrent ? "purple" : "indigo";
        ctx.lineWidth = 3;
        ctx.stroke();

        // رسم نقاط البداية والنهاية
        points.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
          ctx.fillStyle = isCurrent ? "purple" : "indigo";
          ctx.fill();
          ctx.strokeStyle = "black";
          ctx.stroke();
        });
      }

      if (tool === "curve") {
        if (points.length < 3) return;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        ctx.quadraticCurveTo(
          points[1].x,
          points[1].y,
          points[2].x,
          points[2].y
        );
        ctx.strokeStyle = isCurrent ? "red" : "darkred";
        ctx.lineWidth = 2;
        ctx.stroke();

        // نقاط التحكم
        points.forEach((p, i) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
          ctx.fillStyle =
            i === 1
              ? isCurrent
                ? "orange"
                : "darkorange"
              : isCurrent
              ? "red"
              : "darkred";
          ctx.fill();
          ctx.strokeStyle = "black";
          ctx.stroke();
        });
      }
    };

    // نرسم كل الأشكال اللي في المصفوفة
    shapes.forEach((shape, index) => drawShape(shape, false));
    // نرسم الشكل الجاري (لو فيه)
    if (currentPoints.length > 0) {
      drawShape({ tool, points: currentPoints }, true);
    }
  };

  useEffect(() => {
    drawCanvas();
  }, [shapes, currentPoints, tool]);

  // حدث الضغط على الماوس
  const onMouseDown = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // حاول نلاقي نقطة ممكن نبدأ نجرها (داخل الأشكال الحالية)
    let foundShapeIndex = null;
    let foundPointIndex = null;

    for (let i = shapes.length - 1; i >= 0; i--) {
      const shape = shapes[i];
      for (let j = 0; j < shape.points.length; j++) {
        const p = shape.points[j];
        if (Math.hypot(p.x - x, p.y - y) < 10) {
          foundShapeIndex = i;
          foundPointIndex = j;
          break;
        }
      }
      if (foundShapeIndex !== null) break;
    }

    if (foundShapeIndex !== null) {
      setDragShapeIndex(foundShapeIndex);
      setDragPointIndex(foundPointIndex);
      setDrawing(false);
      return;
    }

    // مش لاقي نقطة أجدد بناءً على الأداة
    if (tool === "freehand") {
      setCurrentPoints([{ x, y }]);
      setDrawing(true);
    } else if (tool === "line" || tool === "straightLine") {
      if (currentPoints.length < 2) {
        setCurrentPoints([...currentPoints, { x, y }]);
      }
    } else if (tool === "curve") {
      if (currentPoints.length < 3) {
        setCurrentPoints([...currentPoints, { x, y }]);
      }
    }
  };

  // حدث تحريك الماوس
  const onMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (drawing && tool === "freehand") {
      setCurrentPoints((prev) => [...prev, { x, y }]);
    }

    if (dragShapeIndex !== null && dragPointIndex !== null) {
      const newShapes = [...shapes];
      newShapes[dragShapeIndex] = {
        ...newShapes[dragShapeIndex],
        points: newShapes[dragShapeIndex].points.map((p, i) =>
          i === dragPointIndex ? { x, y } : p
        ),
      };
      setShapes(newShapes);
    }
  };

  // حدث رفع الماوس
  const onMouseUp = () => {
    setDrawing(false);

    if (dragShapeIndex !== null) {
      setDragShapeIndex(null);
      setDragPointIndex(null);
      return;
    }

    // لما نكمل الشكل (حسب الأداة) نضيفه للمصفوفة shapes ونصفّر currentPoints
    if (tool === "freehand") {
      if (currentPoints.length > 1) {
        setShapes([...shapes, { tool, points: currentPoints }]);
      }
      setCurrentPoints([]);
    } else if (tool === "line" || tool === "straightLine") {
      if (currentPoints.length === 2) {
        setShapes([...shapes, { tool, points: currentPoints }]);
        setCurrentPoints([]);
      }
    } else if (tool === "curve") {
      if (currentPoints.length === 3) {
        setShapes([...shapes, { tool, points: currentPoints }]);
        setCurrentPoints([]);
      }
    }
  };

  // مسح كل الأشكال
  const clearCanvas = () => {
    setShapes([]);
    setCurrentPoints([]);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* صندوق اختيار الأدوات */}
      <div style={{ width: 140 }}>
        <h3>Tools</h3>
        <button
          onClick={() => {
            setTool("freehand");
            setCurrentPoints([]);
          }}
        >
          Freehand
        </button>
        <button
          onClick={() => {
            setTool("line");
            setCurrentPoints([]);
          }}
        >
          Line
        </button>
        <button
          onClick={() => {
            setTool("straightLine");
            setCurrentPoints([]);
          }}
        >
          Straight Line
        </button>
        <button
          onClick={() => {
            setTool("curve");
            setCurrentPoints([]);
          }}
        >
          Curve
        </button>

        <hr style={{ margin: "10px 0" }} />

        <button onClick={clearCanvas} style={{ color: "red" }}>
          Clear All
        </button>
      </div>

      {/* Canvas الرسم */}
      <canvas
        ref={canvasRef}
        width={600}
        height={450}
        style={{ border: "1px solid #333", cursor: "crosshair" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      />
      {/* مثال: عرض صورة مع clip-path من أول شكل مرسوم */}
      <div style={{ marginLeft: 20 }}>
        <h4>Image with clip-path</h4>
        {shapes.length > 0 ? (
          <div
            style={{
              width: 300,
              height: 300,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: `polygon(${shapes[0].points
                .map((p) => `${p.x}px ${p.y}px`)
                .join(", ")})`,
              border: "2px solid #555",
            }}
          />
        ) : (
          <p>No shape drawn yet</p>
        )}
      </div>
    </div>
  );
};

export default CanvasWithTools;
