import { useState, useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { logout, signInWithGoogle } from "../../firebase/firebase";
import { addProject, addSkill } from "../../utils/firebaseService";

export default function GoogleAuthPage() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: "", url: "" });
  const [newProject, setNewProject] = useState({
    name: "",
    url: "",
    description: "",
    skills: "",
    code: "",
    demo: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects"); // Default tab: "projects"
  const dropdownRef = useRef(null);

  const adminEmail = "mohammedhossam199998@gmail.com";

  const handleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
      setIsAdmin(loggedInUser.email === adminEmail);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setIsAdmin(false);
      setDropdownOpen(false);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const handleAddSkill = async () => {
    if (!newSkill.name.trim() || !newSkill.url.trim()) {
      toast.error("Skill name and URL cannot be empty!");
      return;
    }
    try {
      await addSkill(newSkill);
      toast.success("Skill added successfully!");
      setNewSkill({ name: "", url: "" });
    } catch (error) {
      console.error("Error adding skill:", error);
      toast.error("Failed to add skill.");
    }
  };

  // Updated handleAddProject
  const handleAddProject = async () => {
    if (
      !newProject.name.trim() ||
      !newProject.url.trim() ||
      !newProject.description.trim() ||
      !newProject.skills.trim() ||
      !newProject.code.trim() ||
      !newProject.demo.trim()
    ) {
      toast.error("All fields are required for adding a project!");
      return;
    }
    try {
      await addProject(newProject);
      toast.success("Project added successfully!");
      setNewProject({
        name: "",
        url: "",
        description: "",
        skills: "",
        code: "",
        demo: "",
      });
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add project.");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <div>
      {!user ? (
        <button
          onClick={handleLogin}
          className="cursor-pointer text-white group flex gap-2 items-center bg-[#555] px-2 md:px-4 py-2 rounded-md font-medium text-sm hover:bg-zinc-800 transition-all duration-200"
        >
          <FcGoogle className="text-xl" />
          <span className="text-nowrap max-md:hidden">
            Continue with Google
          </span>
        </button>
      ) : (
        <div className="relative flex" ref={dropdownRef}>
          <div className="rounded-full bg-gray-100/30 p-1 shadow-2xl hover:opacity-95">
            <img
              src={user.photoURL}
              alt="User Profile"
              className="rounded-circle cursor-pointer"
              style={{ width: "50px", height: "50px" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>

          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 bg-white p-2 rounded-md absolute top-full mt-2 right-0 shadow-md"
            >
              {isAdmin && (
                <div>
                  <button
                    onClick={() => setShowPopup(true)}
                    className="bg-blue-600 text-nowrap text-white px-4 py-2 rounded-md"
                  >
                    Open Admin Panel
                  </button>

                  {showPopup && (
                    <div className="fixed inset-0 z-20 bg-[#000000c7] flex justify-center items-center">
                      <div className="bg-white rounded-md p-6 w-96 space-y-3">
                        <span className="text-lg font-bold mb-4 text-center block text-black">
                          Admin Panel
                        </span>
                        {/* Tab Selector */}
                        <div className="flex justify-between border-b mb-3">
                          <button
                            className={`py-2 px-4 ${
                              activeTab === "projects"
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : "text-black "
                            }`}
                            onClick={() => setActiveTab("projects")}
                          >
                            Projects
                          </button>
                          <button
                            className={`py-2 px-4 ${
                              activeTab === "skills"
                                ? "border-b-2 border-blue-500 text-blue-500"
                                : "text-black "
                            }`}
                            onClick={() => setActiveTab("skills")}
                          >
                            Skills
                          </button>
                        </div>
                        {activeTab === "projects" && (
                          <form>
                            <input
                              required
                              type="text"
                              placeholder="Project name"
                              value={newProject.name}
                              onChange={(e) =>
                                setNewProject((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              className="border p-2 rounded w-full text-black"
                            />
                            <input
                              type="url"
                              placeholder="Project URL"
                              value={newProject.url}
                              onChange={(e) =>
                                setNewProject((prev) => ({
                                  ...prev,
                                  url: e.target.value,
                                }))
                              }
                              className="border p-2 rounded w-full text-black mt-2"
                            />
                            <textarea
                              placeholder="Project Description"
                              value={newProject.description}
                              onChange={(e) =>
                                setNewProject((prev) => ({
                                  ...prev,
                                  description: e.target.value,
                                }))
                              }
                              className="border p-2 rounded w-full text-black mt-2"
                            />
                            <input
                              required
                              type="text"
                              placeholder="Project Skills (comma-separated)"
                              value={newProject.skills}
                              onChange={(e) =>
                                setNewProject((prev) => ({
                                  ...prev,
                                  skills: e.target.value,
                                }))
                              }
                              className="border p-2 rounded w-full text-black mt-2"
                            />
                            <input
                              type="url"
                              placeholder="Project Code Link (e.g., GitHub URL)"
                              value={newProject.code}
                              onChange={(e) =>
                                setNewProject((prev) => ({
                                  ...prev,
                                  code: e.target.value,
                                }))
                              }
                              className="border p-2 rounded w-full text-black mt-2"
                            />
                            <input
                              type="url"
                              placeholder="Project Demo Link"
                              value={newProject.demo}
                              onChange={(e) =>
                                setNewProject((prev) => ({
                                  ...prev,
                                  demo: e.target.value,
                                }))
                              }
                              className="border p-2 rounded w-full text-black mt-2"
                            />
                            <button
                            type="button"
                              onClick={handleAddProject}
                              className="bg-green-500 text-white px-3 py-2 rounded mt-2 w-full"
                            >
                              Add Project
                            </button>
                          </form>
                        )}
                        {/* Close Button */}
                        <button
                          onClick={() => setShowPopup(false)}
                          className="bg-red-500 text-white px-3 py-2 rounded mt-4 w-full"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-black text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
