import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import './App.css';

// Water Wise blog posts data
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
      
      <p>In short, the typical lawn is <b>resource-intensive, ecologically disruptive, and ill-suited for arid environments.</b> It's time to rethink what a beautiful yard looks like.</p>
      
      <h2>Native Alternatives</h2>
      
      <p>Fortunately, there are water-smart alternatives that are both ecologically responsible and visually appealing. <b>Native plants</b>, which have evolved to thrive in the natural conditions of your local climate, offer an excellent solution. <br><br>In the Southwest, for example, native species like <b>agave, yucca, desert marigold, globe mallow, penstemon, and various native grasses</b> not only survive with minimal water but also create landscapes full of texture, color, and movement. These plants are adapted to periods of drought, heat, and poor soils — all without the need for synthetic inputs. <br><br><b>Xeriscaping</b>, the practice of designing landscapes to reduce or eliminate irrigation, often incorporates native and drought-tolerant plants, gravel or mulch groundcovers, and efficient drip irrigation systems. Far from being dull or brown, these gardens can be vibrant and full of life — and they change with the seasons in a way that turf grass never does.</p>
      
      <h2>Benefits of Native Landscaping</h2>

      <p>Making the switch from a lawn to native landscaping isn't just good for the planet — it has tangible benefits for homeowners and communities:</p>
      
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
      
      <p>Converting your lawn doesn't have to be overwhelming. You can start small, targeting one section of your yard — such as a parkway strip, side yard, or an area that's hard to irrigate. Focus first on replacing the most water-intensive areas and expand as you're ready.</p>
      
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

      <p>In regions where water scarcity is a growing concern, ditching the lawn isn't a sacrifice — it's an upgrade. By replacing grass with climate-appropriate, low-water alternatives, you're helping to build a more sustainable, resilient, and ecologically rich future.</p>
      <p><b>Water-wise living isn't just about saving gallons — it's about reimagining beauty to reflect the environment we live in.</b></p>
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
