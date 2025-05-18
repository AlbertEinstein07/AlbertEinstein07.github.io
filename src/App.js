import React from "react";
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
      <h1>Ditch the Grass: Smarter Landscaping for Arid Regions</h1>
      
      <p>Traditional lawns are one of the biggest water consumers in residential landscapes, especially in arid regions where they're not naturally adapted to the climate. In this article, we'll explore smarter landscaping alternatives that conserve water while still creating beautiful outdoor spaces.</p>
      
      <h2>Why Traditional Lawns Are Problematic</h2>
      
      <p>A typical grass lawn requires approximately 55 gallons of water per square foot annually in arid regions. Beyond their excessive water consumption, lawns often require chemical fertilizers, pesticides, and regular maintenance with gas-powered equipment, all of which have environmental impacts.</p>
      
      <h2>Native Alternatives</h2>
      
      <p>Native plants have evolved to thrive in your local conditions without additional water beyond what nature provides. In the southwest United States, plants like agave, yucca, sage, and various native grasses can create visually stunning landscapes that require minimal irrigation once established.</p>
      
      <h2>Benefits of Native Landscaping</h2>
      
      <ul>
        <li>Reduces water consumption by 50-75% compared to traditional lawns</li>
        <li>Requires minimal maintenance and fewer chemical inputs</li>
        <li>Provides habitat for local pollinators and wildlife</li>
        <li>Creates regionally appropriate aesthetic that connects to local ecology</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>Converting your lawn to native landscaping doesn't have to happen all at once. Start with a small section, perhaps in an area that's difficult to irrigate or maintain. Research plants native to your specific region and climate zone for best results.</p>
      
      <p>Remember that even drought-tolerant landscaping requires regular water during the establishment period (typically the first 1-2 years). After that, occasional deep watering during extremely dry periods may be all that's needed.</p>
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
];

function Navigation() {
  return (
    <nav className="bg-blue-100 text-blue-900 p-4 rounded-lg mb-6 flex justify-between items-center">
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
      <div className="p-6 max-w-5xl mx-auto">
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
    </Router>
  );
}
