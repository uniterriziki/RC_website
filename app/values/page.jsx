import { Lightbulb, Target, Heart } from "lucide-react";

export default function Values() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Research Club Uon</span>
          <Lightbulb className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">RC UON</span>
        </a>
      </header>
      <main className="flex-1">
        {/* Hero of Mission, Vision and Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Our Mission, Vision, and Values
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Guiding principles that shape our company and drive our success.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {/* Mission */}
              <div className="p-6 bg-white shadow rounded">
                <div className="mb-4">
                  <Target className="w-8 h-8 mb-4" />
                  <h2 className="text-lg font-semibold">Our Mission</h2>
                </div>
                <div>
                  <p>
                    To empower individuals and businesses through innovative
                    technology solutions, fostering growth and positive change
                    in the digital landscape.
                  </p>
                </div>
              </div>
              {/* Vision */}
              <div className="p-6 bg-white shadow rounded">
                <div className="mb-4">
                  <Lightbulb className="w-8 h-8 mb-4" />
                  <h2 className="text-lg font-semibold">Our Vision</h2>
                </div>
                <div>
                  <p>
                    To be the leading force in shaping a connected world where
                    technology enhances human potential and creates sustainable
                    value for society.
                  </p>
                </div>
              </div>
              {/* Values */}
              <div className="p-6 bg-white shadow rounded">
                <div className="mb-4">
                  <Heart className="w-8 h-8 mb-4" />
                  <h2 className="text-lg font-semibold">Our Values</h2>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Innovation: Constantly pushing boundaries and embracing
                      new ideas.
                    </li>
                    <li>
                      Integrity: Upholding the highest ethical standards in all
                      we do.
                    </li>
                    <li>
                      Collaboration: Fostering teamwork and partnerships for
                      collective success.
                    </li>
                    <li>
                      Excellence: Striving for the highest quality in our
                      products and services.
                    </li>
                    <li>
                      Customer-Centric: Putting our customers' needs at the
                      heart of our decisions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Your Company Name. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
