export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white py-12 md:py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Christopher Poole</h1>
          <p className="mt-4 text-lg md:text-xl text-light/90 font-sans">Welcome to my personal website</p>
        </div>
      </header>
      
      <main className="flex-grow container py-12 md:py-16">
        <section className="mb-16 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">About Me</h2>
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-light/50">
            <div className="prose prose-lg max-w-none text-secondary">
              <p className="mb-6 font-serif">
                Hello! I&apos;m Christopher Poole, a passionate professional dedicated to excellence in my field. 
                With years of experience and a commitment to continuous learning, I strive to create meaningful 
                work that makes a difference.
              </p>
              <p>
                This website serves as a platform to share my projects, insights, and journey. Feel free to 
                explore and don&apos;t hesitate to reach out if you&apos;d like to connect or collaborate.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">Latest Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-8 rounded-lg shadow-sm border border-light/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-3">Project 1</h3>
              <p className="text-secondary mb-4">
                A brief description of the project and its key features. Highlight what makes it special 
                and the technologies used.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="inline-flex items-center bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full">
                  React
                </span>
                <span className="inline-flex items-center bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full">
                  TypeScript
                </span>
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-lg shadow-sm border border-light/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-2xl md:text-3xl text-primary mb-3">Project 2</h3>
              <p className="text-secondary mb-4">
                Another project description that showcases your skills and expertise. Keep it concise 
                but informative.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="inline-flex items-center bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full">
                  Next.js
                </span>
                <span className="inline-flex items-center bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-primary text-light py-8 mt-12">
        <div className="container">
          <p className="text-center">&copy; {new Date().getFullYear()} Christopher Poole. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
