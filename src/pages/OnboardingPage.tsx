import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Edit3 } from "lucide-react";

const OnboardingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#fc8804] via-[#ffa258] to-[#db7503] bg-clip-text text-transparent">
              BlogSpace
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful space to share your thoughts, stories, and ideas with
            the world. Start writing your journey today.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Edit3 className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Write Freely
            </h3>
            <p className="text-gray-600">
              Express your thoughts without limitations
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Read & Explore
            </h3>
            <p className="text-gray-600">
              Discover amazing stories from other writers
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Users className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Join Community
            </h3>
            <p className="text-gray-600">
              Connect with like-minded writers and readers
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/home"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#fc8804] to-[#ffa258] text-white font-semibold rounded-2xl hover:from-[#db7503] hover:to-[#fc8804] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </Link>

        {/* Footer Text */}
        <p className="mt-8 text-gray-500">
          No account required. Start writing immediately!
        </p>
      </div>
    </div>
  );
};

export default OnboardingPage;
