import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

const posts = [
  {
    id: 1,
    title: "Ditch the Grass: Smarter Landscaping for Arid Regions",
    date: "May 10, 2025",
    summary:
      "Traditional lawns are water hogs. Learn about native landscaping alternatives that conserve water and support biodiversity.",
    content: `
      <p><b>Traditional lawns are some of the biggest water consumers in residential landscapes</b>, especially in arid regions where they're not naturally adapted to the climate. In this article, we'll explore smarter landscaping alternatives that conserve water while still creating beautiful outdoor spaces.</p>
      
      <h2>Why Traditional Lawns Are Problematic</h2>
      
      <p>In dry climates like the American Southwest, a lush green lawn may seem like a symbol of success or comfort — but it's a symbol that comes at a steep environmental cost. A typical lawn in an arid region requires an estimated 55 gallons of water per square foot annually. That means a modest 1,000-square-foot lawn consumes around 55,000 gallons of water each year, just to stay green.</p>

      <p>But the impact goes beyond water use. Traditional lawns often depend on chemical fertilizers and pesticides that can run off into storm drains, contaminating local water supplies. The maintenance also adds up — gas-powered mowers and blowers contribute to air pollution and greenhouse gas emissions, while weekly upkeep takes time and money.</p>
       
      <p>In short, the typical lawn is <b>resource-intensive, ecologically disruptive, and ill-suited for arid environments.</b> It’s time to rethink what a beautiful yard looks like.</p>
      
      <h2>Native Alternatives</h2>
      
      <p>Fortunately, there are water-smart alternatives that are both ecologically responsible and visually appealing. <b>Native plants</b>, which have evolved to thrive in the natural conditions of your local climate, offer an excellent solution. <br><br>In the Southwest, for example, native species like <b>agave, yucca, desert marigold, globe mallow, penstemon, and various native grasses</b> not only survive with minimal water but also create landscapes full of texture, color, and movement. These plants are adapted to periods of drought, heat, and poor soils — all without the need for synthetic inputs. <br><br><b>Xeriscaping</b>, the practice of designing landscapes to reduce or eliminate irrigation, often incorporates native and drought-tolerant plants, gravel or mulch groundcovers, and efficient drip irrigation systems. Far from being dull or brown, these gardens can be vibrant and full of life — and they change with the seasons in a way that turf grass never does.</p>
      
      <h2>Benefits of Native Landscaping</h2>

      <p>Making the switch from a lawn to native landscaping isn’t just good for the planet — it has tangible benefits for homeowners and communities:</p>
      
      <ul>
        <li><b>Reduces water use by 50–75%</b> compared to conventional turf lawns</li>
        <li><b>Minimizes maintenance</b> — no weekly mowing, fertilizing, or constant watering</li>
        <li><b>Reduces chemical use</b>, improving soil health and protecting local water quality</li>
        <li><b>Provides critical habitat for native pollinators</b> like bees, butterflies, and hummingbirds</li>
        <li><b>Improves resilience</b> — native plants are better able to survive droughts and extreme heat</li>
        <li><b>Connects your yard to local ecology</b>, offering a natural look that reflects the beauty of your region</li>
      </ul>

      <p>In fact, studies show that homes with sustainable landscaping often increase in value, especially in areas with permanent or seasonal water restrictions.</p>
      
      <h2>Getting Started</h2>
      
      <p>Converting your lawn doesn’t have to be overwhelming. You can start small, targeting one section of your yard — such as a parkway strip, side yard, or an area that’s hard to irrigate. Focus first on replacing the most water-intensive areas and expand as you're ready.</p>
      
      <p>Here are a few tips to get going:</p>
      <ul>
          <li><b>Research native plants</b> in your specific region and USDA hardiness zone</li>
          <li><b>Use mulch or gravel</b> to retain soil moisture and reduce weeds</li>
          <li><b>Plan for grouping plants</b> with similar water needs to simplify irrigation</li>
          <li><b>Install drip irrigation</b> systems to deliver water efficiently during establishment</li>
          <li><b>Remove turf gradually</b>, using sheet mulching, solarization, or hand removal</li>
          <li><b>Consult local extension services</b> or native plant societies for planting guides and nursery recommendations</li>
      </ul>

      <p>Keep in mind that even drought-tolerant plants need consistent watering during their first 1–2 years while they develop strong root systems. After that, most will thrive on <b>occasional deep watering</b> or even natural rainfall alone.</p>

      <h2>Final Thoughts</h2>

      <p>In regions where water scarcity is a growing concern, ditching the lawn isn’t a sacrifice — it’s an upgrade. By replacing grass with climate-appropriate, low-water alternatives, you’re helping to build a more sustainable, resilient, and ecologically rich future.</p>
      <p><b>Water-wise living isn’t just about saving gallons — it’s about reimagining beauty to reflect the environment we live in.</b></p>
      `,
  },
  {
    id: 2,
    title: "Greywater Recycling 101: Save Water at Home",
    date: "May 5, 2025",
    summary:
      "Discover how to safely reuse water from sinks, showers, and washing machines to nourish your garden.",
    content: `
      <p>As water shortages become more common across the globe, especially in arid and drought-prone regions, homeowners are increasingly looking for sustainable ways to reduce water usage. One often-overlooked solution is greywater recycling — a practical, affordable, and eco-friendly way to reuse water you’re already using every day.</p>

      <p><b>Greywater refers to gently used water</b> from your home's sinks, showers, bathtubs, and washing machines. Instead of sending this water down the drain to the sewer system, it can be recycled to irrigate your landscape, providing substantial water savings without sacrificing plant health or household comfort.</p>
      
      <h2>Benefits of Greywater Recycling</h2>
      
      <p>The typical American household uses <b>about 300 gallons of water per day</b>, and studies estimate that 50–80% of that becomes greywater. That’s water that has only been lightly used and still holds potential to support plant life, especially in non-potable applications like drip irrigation.</p>
      
      <p>By installing a greywater system, you can:</p>

      <ul>
        <li>Reduce your overall water use by up to 40%</li>
        <li>Lower your water bill</li>
        <li>Reduce the burden on municipal water treatment plants</li>
        <li>Create a resilient home system in times of drought or water restrictions</li>
      </ul>

      <p>In many dry regions, recycled greywater can provide most — if not all — of the irrigation needs for a typical home garden or landscape.</p>
      
      <h2>Simple Greywater Systems</h2>
      
      <p>You don’t need an expensive or complex setup to start reusing greywater. One of the most popular and beginner-friendly methods is the <b>“laundry-to-landscape”</b> system, which reroutes water from your washing machine directly to plants in your yard.</p>
      
      <ul>
        <li><b>Cost</b>: $150–300 in materials</li>
        <li><b>DIY-friendly</b>: Doesn’t typically require permits in many jurisdictions</li>
        <li><b>No tanks or pumps needed</b>: Relies on gravity flow and simple piping</li>
      </ul>

      <p>This kind of system works best for trees, shrubs, or garden beds (not lawns), and it allows homeowners to selectively water areas of their landscape that benefit most from consistent moisture.</p>

      <p><b>Pro tip</b>: Use a three-way valve on your washing machine outflow so you can divert water to the sewer when using bleach or harsh cleaners that aren't safe for plants.</p>

      <h2>Important Safety Guidelines</h2>
      
      <p>While greywater is a fantastic resource, it’s not completely without risk. To protect both your health and your plants, it’s important to follow these safety principles:</p>
      
      <ul>
        <li><b>Use only biodegradable, plant-friendly</b> soaps and detergents — avoid boron and salts, which can build up in soil over time</li>
        <li><b>Apply greywater directly to the soil</b> using subsurface irrigation — never spray or mist, as this can aerosolize contaminants</li>
        <li><b>Don’t store greywater for more than 24 hours</b>, as bacteria can begin to grow</li>
        <li><b>Avoid watering root vegetables or any edible plant where the produce contacts soil</b></li>
        <li><b>Include a diverter switch</b> to easily send water back to the sewer when using non-compatible products</li>
      </ul>

      <p>Greywater isn’t meant to replace potable water for household use, but it’s perfectly safe and effective for landscape reuse when handled correctly.</p>
      
      <h2>Check Local Regulations</h2>
      
      <p>Before installing any greywater system, make sure to check your <b>local plumbing codes and greywater regulations</b>. Some regions, particularly in the western U.S., have updated their policies to <b>encourage greywater reuse</b>, while others may require permits or professional installation.</p>

      <p>Resources to consult:</p>
      <ul>
        <li>Local building or environmental health department</li>
        <li>Water utility rebates or incentives</li>
        <li>State environmental agency websites</li>
        <li>Greywater-specific nonprofits and advocacy groups (like Greywater Action)</li>
      </ul>

      <p>With proper planning and compliance, greywater systems can cut your outdoor water use dramatically, reduce your utility costs, and help your household become more drought-resilient — all while giving a second life to water you'd otherwise waste.</p>

      <h2>Final Thoughts</h2>

      <p>Greywater recycling is <b>low-tech, high-impact sustainability</b> that’s accessible to nearly every homeowner. It’s one of the smartest water conservation strategies available today — especially in places where every drop counts. By redirecting your gently used water to nourish your garden, you’re making a powerful choice for conservation, resilience, and self-sufficiency.</p>
    `,
  },
  {
    id: 3,
    title: "Policy Spotlight: How Local Ordinances Can Encourage Xeriscaping",
    date: "April 30, 2025",
    summary:
      "Explore how legislation can push cities toward sustainable water use by promoting native plant landscaping.",
    content: `
      <h1>Policy Spotlight: How Local Ordinances Can Encourage Xeriscaping</h1>
      
      <p>As water scarcity becomes a growing concern in many regions, cities and counties are turning to policy solutions to encourage water conservation in residential and commercial landscapes. This article examines how local ordinances can effectively promote xeriscaping and water-wise landscaping practices.</p>
      
      <h2>What is Xeriscaping?</h2>
      
      <p>Xeriscaping (from the Greek "xeros" meaning dry) is a landscaping approach that minimizes water use through strategic plant selection, soil improvements, efficient irrigation, and reduced turf areas. While often associated with desert aesthetics, xeriscaping can be adapted to any region's native plants and climate conditions.</p>
      
      <h2>Effective Policy Approaches</h2>
      
      <h3>Lawn Restrictions</h3>
      <p>Some municipalities have implemented ordinances that limit the percentage of a property that can be dedicated to traditional turfgrass. Las Vegas, Nevada successfully reduced water consumption by offering rebates for lawn removal and limiting new turf installations.</p>
      
      <h3>Water Budgets</h3>
      <p>Rather than outright bans, some cities establish water budgets for properties based on size, assigning a reasonable allocation and charging premium rates for usage beyond that threshold. This approach preserves choice while incentivizing conservation.</p>
      
      <h3>Landscape Requirements for New Construction</h3>
      <p>Cities can require water-efficient landscaping for all new developments, ensuring that water conservation is built into communities from the start.</p>
      
      <h2>Incentive Programs</h2>
      
      <p>Successful policies often pair regulations with incentives:</p>
      
      <ul>
        <li>Rebates for turf removal (typically $1-3 per square foot)</li>
        <li>Free landscape design consultations</li>
        <li>Discounted native plants</li>
        <li>Recognition programs for exemplary water-wise landscapes</li>
      </ul>
      
      <h2>Addressing HOA Conflicts</h2>
      
      <p>Many states now have laws preventing homeowners associations from banning drought-tolerant landscaping, addressing a common barrier to xeriscaping. These "right to xeriscape" laws have been crucial in allowing homeowners to make water-wise choices even in communities with strict aesthetic guidelines.</p>
      
      <h2>Case Study: Tucson, Arizona</h2>
      
      <p>Tucson's comprehensive approach combines rebates, education, and rainwater harvesting incentives. Since implementing these policies, the city has seen a 30% reduction in per capita water use despite population growth.</p>
    `,
  },

];

function HeaderComponent() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class when page is scrolled
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <nav className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? "text-blue-900" : "text-blue-800"
        }`}>
          <Link to="/" className="text-xl font-bold cursor-pointer">WaterWise Living</Link>
          <div className="space-x-2 hidden md:flex">
            <Link to="/" className="px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Home</Link>
            <Link to="/about" className="px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">About</Link>
            <Link to="/articles" className="px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Articles</Link>
            <Link to="/contact" className="px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Contact</Link>
            <Link to="/resources" className="px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Resources</Link>
            <Link to="/quiz" className="px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Quiz</Link>
            <Link to="/calculator" className="px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Calculator</Link>
          </div>
          <Button variant="ghost" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <div className="mb-6 pt-16">
      {/* This empty div creates space for the fixed header */}
    </div>
  );
}

function HomePage() {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl p-10 mb-12 shadow-lg">
        <h1 className="text-5xl font-bold mb-4">WaterWise Living</h1>
        <p className="text-xl mb-6 max-w-3xl">
          Practical strategies, policy insights, and science-driven stories on saving water and securing our future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link to="/articles" className="no-underline">
            <Button variant="secondary" size="large" className="w-full sm:w-auto">
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                View All Articles
              </span>
            </Button>
          </Link>
          <Link to="/contact" className="no-underline">
            <Button variant="primary" size="large" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Subscribe to Newsletter
              </span>
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b border-blue-200 pb-2">Featured Posts</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover our latest articles on water conservation and sustainable living
        </p>
      </div>
      
      {/* Single Column Blog Posts */}
      <section className="space-y-10">
        {posts.map((post) => (
          <Link to={`/article/${post.id}`} key={post.id} className="no-underline block">
            <Card className="hover:shadow-xl transition-shadow bg-white overflow-hidden">
              {/* Featured Image Placeholder */}
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 h-48 flex items-center justify-center">
                <span className="text-blue-800 font-semibold">Featured Image</span>
              </div>
              
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold text-blue-700 mb-3">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4 font-medium">{post.date}</p>
                <p className="text-lg text-gray-800 mb-4 leading-relaxed">{post.summary}</p>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-blue-600 font-medium hover:underline">Read more →</p>
                  <div className="flex space-x-2">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Water Conservation</span>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Sustainability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      
      {/* Call to Action */}
      <div className="bg-blue-50 p-8 rounded-lg mt-12 text-center">
        <h3 className="text-2xl font-bold text-blue-800 mb-3">Join Our Community</h3>
        <p className="text-lg text-gray-700 mb-6">
          Stay updated with the latest articles, resources, and water conservation tips
        </p>
        <Link to="/contact" className="no-underline inline-block">
          <Button variant="primary" size="large" className="px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl">
            <span className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Subscribe Now
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg">
        WaterWise Living is dedicated to promoting sustainable water practices through education, policy advocacy,
        and community engagement. Our mission is to inspire and inform people to conserve water in their homes,
        landscapes, and cities.
      </p>
    </div>
  );
}

function ArticlesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Articles</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link to={`/article/${post.id}`} key={post.id} className="no-underline">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-1">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-base text-gray-800">{post.summary}</p>
                <p className="text-blue-600 mt-2 hover:underline">Read more →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
      <form className="space-y-4 bg-blue-50 p-6 rounded-lg">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit" variant="primary" size="large" className="w-full md:w-auto mt-2">
          <span className="flex items-center justify-center">
            <span>Submit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Button>
      </form>
    </div>
  );
}

function ResourcesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Resources</h2>
      <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
        <li>
          <a href="https://www.epa.gov/watersense" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            EPA WaterSense Program
          </a>
        </li>
        <li>
          <a href="https://wateruseitwisely.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            Water Use It Wisely: 100+ Ways to Conserve
          </a>
        </li>
        <li>
          <a href="https://www.twdb.texas.gov/conservation/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            Texas Water Development Board — Conservation Resources
          </a>
        </li>
        <li>
          <a href="https://www.homeadvisor.com/r/ways-to-save-water/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            HomeAdvisor: Top 30 Ways to Save Water
          </a>
        </li>
        <li>
          <a href="https://trca.ca/resource/green-yard-water-conservation/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
            Toronto and Region Conservation Authority: Green Yard Water Conservation
          </a>
        </li>
      </ul>
    </div>
  );
}

function QuizPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Water Conservation Quiz</h2>
      <p className="text-lg text-gray-700 mb-4">Coming soon! Test your water-saving knowledge here.</p>
    </div>
  );
}

function CalculatorPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Water Savings Calculator</h2>
      <p className="text-lg text-gray-700 mb-4">Coming soon! Estimate your potential water savings here.</p>
    </div>
  );
}

function FooterComponent() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-50 border-t border-blue-100 mt-16 pt-10 pb-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">WaterWise Living</h3>
            <p className="text-gray-700 mb-4">
              Promoting sustainable water practices through education, policy advocacy,
              and community engagement. Our mission is to inspire and inform people to 
              conserve water in their daily lives.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-700 hover:text-blue-600">Articles</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-700 hover:text-blue-600">Resources</Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-700 hover:text-blue-600">Quiz</Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-700 hover:text-blue-600">Calculator</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@waterwiselivingblog.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>123 Water Conservation Ave.<br />Sustainable City, SC 12345</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(512) 521-4661</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-100 mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {currentYear} WaterWise Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the article by id
  const article = posts.find(post => post.id === parseInt(id));
  
  if (!article) {
    return (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Article not found</h2>
        <p className="text-gray-700 mb-6">The article you're looking for doesn't exist.</p>
        <Button 
          onClick={() => navigate('/articles')}
          variant="secondary"
          size="large"
          className="px-6"
        >
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Articles
          </span>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="article-page">
        <Button 
          onClick={() => navigate(-1)} 
          className="mb-6"
          variant="outline"
          size="medium"
        >
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </span>
        </Button>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">{article.title}</h1>
          <p className="text-gray-500">{article.date}</p>
        </div>
        
        <div 
          className="article-content prose prose-blue max-w-none" 
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="p-6 max-w-5xl mx-auto min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}
