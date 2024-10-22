"use client";
import React, { useState } from "react";
import {
  Settings,
  Image as ImageIcon,
  Map,
  MessageSquare,
  Users,
  Calendar,
  Star,
  FileText,
  Home,
  Menu,
  X,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("general");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [editingContent, setEditingContent] = useState(null);

  const menuItems = [
    { id: "general", label: "General Settings", icon: Settings },
    { id: "hero", label: "Hero Section", icon: Home },
    { id: "destinations", label: "Destinations", icon: Map },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
    { id: "testimonials", label: "Testimonials", icon: Star },
    { id: "faq", label: "FAQ", icon: MessageSquare },
    { id: "team", label: "Team", icon: Users },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "footer", label: "Footer", icon: FileText },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderContentEditor = () => {
    switch (activeSection) {
      case "general":
        return <GeneralSettings />;
      case "hero":
        return <HeroEditor />;
      case "destinations":
        return <DestinationsEditor />;
      case "gallery":
        return <GalleryEditor />;
      case "testimonials":
        return <TestimonialsEditor />;
      case "faq":
        return <FAQEditor />;
      case "team":
        return <TeamEditor />;
      case "bookings":
        return <BookingsManager />;
      case "footer":
        return <FooterEditor />;
      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1c150d] text-white px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kiprich Safaris Admin</h1>
        <button className="lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          ${isMobileMenuOpen ? "block" : "hidden"}
          lg:block
          w-64 bg-white h-[calc(100vh-64px)] fixed lg:sticky top-16 lg:top-0
          overflow-y-auto border-r border-gray-200
        `}
        >
          <nav className="p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-2 px-4 py-2 rounded-lg mb-1
                  ${
                    activeSection === item.id
                      ? "bg-[#f49a25] text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{renderContentEditor()}</div>
        </main>
      </div>
    </div>
  );
};

// Individual section components
const GeneralSettings = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">General Settings</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Website Name</label>
        <input
          type="text"
          defaultValue="Kiprich Safaris"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-[#f49a25]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Contact Email</label>
        <input
          type="email"
          defaultValue="info@kiprichsafaris.com"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-[#f49a25]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          defaultValue="+254 16 340 304"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-[#f49a25]"
        />
      </div>
      <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
        Save Changes
      </button>
    </div>
  </div>
);

const HeroEditor = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">Hero Section</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Main Title</label>
        <input
          type="text"
          defaultValue="Discover Kenya's Magic"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-[#f49a25]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Subtitle</label>
        <textarea
          defaultValue="Experience the breathtaking beauty of East Africa's wildlife"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-[#f49a25]"
          rows="3"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Background Image
        </label>
        <div className="flex items-center space-x-4">
          <input type="file" accept="image/*" className="border p-2 rounded" />
          <img
            src="/api/placeholder/200/100"
            alt="Current hero"
            className="h-20 w-32 object-cover rounded"
          />
        </div>
      </div>
      <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
        Update Hero
      </button>
    </div>
  </div>
);

const DestinationsEditor = () => {
  const [destinations, setDestinations] = useState([
    {
      name: "Masai Mara",
      description: "Experience the world-famous wildebeest migration",
    },
    {
      name: "Amboseli",
      description: "Witness herds of elephants against Mount Kilimanjaro",
    },
    { name: "Tsavo", description: "Explore Kenya's largest national park" },
  ]);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Destinations</h2>
      <div className="space-y-6">
        {destinations.map((dest, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-4 flex-1 mr-4">
                <input
                  type="text"
                  value={dest.name}
                  className="w-full p-2 border rounded"
                  placeholder="Destination name"
                />
                <textarea
                  value={dest.description}
                  className="w-full p-2 border rounded"
                  rows="2"
                  placeholder="Description"
                />
              </div>
              <button className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                className="border p-2 rounded"
              />
            </div>
          </div>
        ))}
        <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
          Add New Destination
        </button>
      </div>
    </div>
  );
};

const GalleryEditor = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">Gallery Management</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="relative group">
          <img
            src="/api/placeholder/200/200"
            alt={`Gallery item ${item}`}
            className="w-full h-40 object-cover rounded"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button className="text-white bg-red-500 px-3 py-1 rounded">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        className="border p-2 rounded mb-4"
      />
      <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
        Upload Images
      </button>
    </div>
  </div>
);

const TestimonialsEditor = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">Manage Testimonials</h2>
    <div className="space-y-6">
      {[1, 2].map((item) => (
        <div key={item} className="border p-4 rounded-lg">
          <textarea
            defaultValue="Our experience with Kiprich Safaris was truly unforgettable..."
            className="w-full p-2 border rounded mb-2"
            rows="3"
          />
          <input
            type="text"
            defaultValue="Sarah & John, UK"
            className="w-full p-2 border rounded mb-2"
            placeholder="Author"
          />
          <button className="text-red-500 hover:text-red-700">
            Remove Testimonial
          </button>
        </div>
      ))}
      <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
        Add New Testimonial
      </button>
    </div>
  </div>
);

const FAQEditor = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">Manage FAQs</h2>
    <div className="space-y-6">
      {[1, 2, 3].map((item) => (
        <div key={item} className="border p-4 rounded-lg">
          <input
            type="text"
            defaultValue="What is the best time to visit Kenya for a safari?"
            className="w-full p-2 border rounded mb-2"
            placeholder="Question"
          />
          <textarea
            defaultValue="The best time for a safari in Kenya is during the dry seasons..."
            className="w-full p-2 border rounded mb-2"
            rows="3"
            placeholder="Answer"
          />
          <button className="text-red-500 hover:text-red-700">
            Remove FAQ
          </button>
        </div>
      ))}
      <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
        Add New FAQ
      </button>
    </div>
  </div>
);

const TeamEditor = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">Team Members</h2>
    <div className="space-y-6">
      {[1, 2].map((item) => (
        <div key={item} className="border p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                defaultValue="Richard Kiprotich"
                className="w-full p-2 border rounded mb-2"
                placeholder="Name"
              />
              <input
                type="text"
                defaultValue="Founder & Lead Guide"
                className="w-full p-2 border rounded mb-2"
                placeholder="Position"
              />
              <textarea
                defaultValue="25 years of experience in wildlife tours..."
                className="w-full p-2 border rounded mb-2"
                rows="3"
                placeholder="Bio"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="border p-2 rounded mb-2"
              />
              <img
                src="/api/placeholder/200/200"
                alt="Team member"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">
            Remove Team Member
          </button>
        </div>
      ))}
      <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
        Add Team Member
      </button>
    </div>
  </div>
);

const BookingsManager = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-6">Booking Requests</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Destination
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            {
              name: "John Smith",
              email: "john@example.com",
              date: "2024-05-15",
              destination: "Masai Mara",
              status: "Pending",
            },
            {
              name: "Emma Wilson",
              email: "emma@example.com",
              date: "2024-06-20",
              destination: "Amboseli",
              status: "Confirmed",
            },
          ].map((booking, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {booking.destination}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {booking.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="text-[#f49a25] hover:text-[#e38d1e] mr-3">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const FooterEditor = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  });

  const [quickLinks, setQuickLinks] = useState([
    { label: "About Us", url: "#" },
    { label: "Our Safaris", url: "#" },
    { label: "Destinations", url: "#" },
    { label: "FAQs", url: "#" },
  ]);

  const [contactInfo, setContactInfo] = useState({
    email: "info@kiprichsafaris.com",
    phone: "+254 16 340 304",
    address: "Nairobi, Kenya",
  });

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Footer Settings</h2>

      <div className="space-y-8">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-4">
            {quickLinks.map((link, index) => (
              <div key={index} className="flex space-x-4">
                <input
                  type="text"
                  value={link.label}
                  placeholder="Link Label"
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  type="text"
                  value={link.url}
                  placeholder="URL"
                  className="w-1/2 p-2 border rounded"
                />
                <button className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
              Add Link
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={contactInfo.email}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                value={contactInfo.phone}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                value={contactInfo.address}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <div key={platform}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {platform}
                </label>
                <input
                  type="url"
                  value={url}
                  className="w-full p-2 border rounded"
                  placeholder={`${platform} URL`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button className="bg-[#f49a25] text-white px-4 py-2 rounded-lg hover:bg-[#e38d1e]">
            Save Footer Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
