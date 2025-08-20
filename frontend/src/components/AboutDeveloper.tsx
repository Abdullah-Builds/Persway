import Tooltip from './icon';

function DeveloperSection(){
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          About the Developer
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Persway is built with passion and precision by a developer dedicated to
          blending clean design with powerful AI — tools that empower businesses
          to grow smarter.
        </p>

        {/* Profile Card */}
        <article className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl p-10 flex flex-col items-center transition-transform hover:scale-[1.02]">
          <img
            src="https://via.placeholder.com/150"
            alt="Developer portrait"
            className="w-32 h-32 rounded-full shadow-md mb-6 border border-gray-200 object-cover"
          />
          <h3 className="text-2xl font-semibold text-gray-900">John Doe</h3>
          <p className="text-blue-600 text-sm mb-4">
            Full Stack Developer • AI Enthusiast
          </p>
          <p className="text-gray-700 max-w-lg mb-6 leading-relaxed">
            With a background in modern web technologies and a passion for
            building intuitive user experiences, I designed Persway to merge
            advanced AI with a clean, light interface that feels effortless to
            use.
          </p>

          {/* Social Links */}
          <nav
            className="flex space-x-6"
            aria-label="Developer social media links"
          >
         <Tooltip/>
          </nav>
        </article>
      </div>
    </section>
  );
};

export default DeveloperSection;
