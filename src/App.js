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
      <h1>Greywater Recycling 101: Save Water at Home</h1>
      
      <p>Greywater refers to gently used water from your home's sinks, showers, tubs, and washing machines. Instead of sending this water straight to the sewer system, it can be recycled for landscape irrigation, providing substantial water savings for the average household.</p>
      
      <h2>Benefits of Greywater Recycling</h2>
      
      <p>The average American household uses about 300 gallons of water per day, with 50-80% becoming greywater. By reusing this water in your landscape, you can:</p>
      
      <ul>
        <li>Reduce your overall water consumption by up to 40%</li>
        <li>Lower your water bill</li>
        <li>Reduce the burden on municipal water treatment facilities</li>
        <li>Create a more resilient home water system during droughts</li>
      </ul>
      
      <h2>Simple Greywater Systems</h2>
      
      <p>The simplest greywater system is a "laundry-to-landscape" setup, which diverts washing machine water to your yard. This doesn't require permits in many jurisdictions and can be installed as a DIY project for around $150-300 in materials.</p>
      
      <h2>Important Safety Guidelines</h2>
      
      <p>When implementing a greywater system, follow these safety principles:</p>
      
      <ul>
        <li>Use plant-friendly, biodegradable soaps and detergents</li>
        <li>Apply greywater directly to soil, not through sprayers or sprinklers</li>
        <li>Don't store greywater for more than 24 hours</li>
        <li>Don't use greywater on root vegetables or any plants where the edible portion contacts the soil</li>
        <li>Include a switch to easily direct water to the sewer when using products that aren't greywater-friendly</li>
      </ul>
      
      <h2>Check Local Regulations</h2>
      
      <p>Before installing a greywater system, always check your local building codes and regulations. Many areas have updated their codes to encourage greywater reuse, but specific requirements vary widely.</p>
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
  {
    id: 4,
    title: "Test Article",
    date: "March 25, 2025",
    summary:
      "This is a test article, no need to worry...",
    content:`
      <p>this is a test article, testing out tags</p>
      <h2>test header</h2>
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
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/articles" className="hover:underline">Articles</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/resources" className="hover:underline">Resources</Link>
            <Link to="/quiz" className="hover:underline">Quiz</Link>
            <Link to="/calculator" className="hover:underline">Calculator</Link>
          </div>
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
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">WaterWise Living</h1>
        <p className="text-lg text-gray-700">
          Practical strategies, policy insights, and science-driven stories on saving water and securing our future.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link to={`/article/${post.id}`} key={post.id} className="no-underline">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-base text-gray-800">{post.summary}</p>
                <p className="text-blue-600 mt-2 hover:underline">Read more →</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
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
        <Button type="submit">Submit</Button>
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
        <Button onClick={() => navigate('/articles')}>
          Back to Articles
        </Button>
      </div>
    );
  }
  
  return (
    <div className="article-page">
      <Button 
        onClick={() => navigate(-1)} 
        className="mb-6"
      >
        ← Back
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
