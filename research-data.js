window.RESEARCH_PAPERS = [
  {
    id: "hed-mainee",
    slug: "hydrodynamic-impact-of-hydraulic-elevator-dam",
    title: "Hydrodynamic Impact of a Hydraulic Elevator Dam on the Mainee River",
    authors: "Asnaful Huda Asnaf, Umme Salsabil Ahmed, S. M. Tasin Zahid, Tanjir Saif Ahmed, Aysha Akter",
    year: "2025",
    category: "River Hydrodynamics",
    publicationType: "Journal article",
    venue: "River Research and Applications, Wiley",
    status: "Under review",
    highlight: "HEC-RAS modeling for dry-season water retention and inundation trade-offs.",
    summary:
      "A one-dimensional HEC-RAS study of the Mainee River in Khagrachari comparing existing conditions with 3 m and 4 m hydraulic elevator dam scenarios.",
    abstract:
      "Water scarcity has become a major problem in the hilly region of Khagrachari. This study evaluates the effectiveness of hydraulic elevator dams in improving dry-season water storage in the Mainee River using a one-dimensional unsteady-flow HEC-RAS model. Three scenarios were analyzed: existing condition, a 3 m hydraulic elevator dam, and a 4 m hydraulic elevator dam. The model was calibrated with observed 2023 water-level data and validated with independent 2024 observations. Performance statistics showed satisfactory agreement between simulated and observed water levels. The study examined water retention, velocity profiles, rating curves, and cumulative retained water volume. The 4 m scenario produced greater storage, while the 3 m alternative offered a more balanced trade-off between water retention benefit and upstream inundation risk.",
    context:
      "The Mainee River supports agriculture and local livelihoods in a hilly, seasonal river system where dry-season discharge can become too low for irrigation needs. Hydraulic elevator dams were studied as flexible structures that may help retain water without permanently blocking river function.",
    objectives: [
      "Simulate and compare retention performance for 3 m and 4 m hydraulic elevator dam scenarios.",
      "Analyze velocity profiles, rating curves, and cumulative volume variation under different dam conditions.",
      "Compare storage benefit and inundation risk to support water management decisions."
    ],
    methodology:
      "The model combined field observations, cross-section data, SRTM DEM information, BWDB discharge and water-level records, and HEC-RAS unsteady-flow simulation. Boundary conditions were defined with upstream flow hydrographs and downstream normal depth. Manning's n was adjusted during calibration and validation.",
    findings: [
      "Both dam scenarios improved upstream water retention compared with existing conditions.",
      "The 4 m scenario increased storage more strongly but produced higher upstream water levels and greater inundation extent.",
      "The 3 m scenario presented a more balanced option for dry-season water storage with lower inundation risk."
    ],
    keywords: ["HEC-RAS", "Hydraulic elevator dam", "Mainee River", "Water retention", "Khagrachari"],
    relatedPaperIds: ["gis-cht", "dharla-hms", "feni-flood"]
  },
  {
    id: "rmg-water-footprint",
    slug: "water-footprints-rmg-industry-chattogram",
    title: "Assessment of Water Footprints for the RMG Industry in Chattogram City",
    authors: "Mohammad Borhan Uddin, Asnaful Huda Asnaf, Priya Chowdhury",
    year: "2026",
    category: "Industrial Water Management",
    publicationType: "Journal article",
    venue: "Environmental Science and Pollution Research",
    status: "Submitted",
    highlight: "Blue and grey water footprint assessment for selected RMG industries.",
    summary:
      "A study of process-specific water use, wastewater quality, and pollution-related dilution demand in Chattogram's ready-made garment sector.",
    abstract:
      "The ready-made garment industry is central to Bangladesh's economy but depends heavily on groundwater and generates wastewater that can affect surrounding ecosystems. This study evaluates blue and grey water footprints for selected RMG industries in Chattogram, focusing on major production processes such as washing, dyeing, and printing. Production, water consumption, abstracted water intake, effluent discharge, BOD, and COD data were used to calculate water footprint indicators. The study also assesses wastewater quality parameters to connect process water use with pollution management. The findings support water recycling, pollution reduction, and sustainable industrial water management practices.",
    context:
      "Chattogram is a major industrial region with a concentration of RMG factories. Groundwater dependence, effluent generation, and limited site-level water footprint data make the sector important for sustainable water planning.",
    objectives: [
      "Estimate monthly and process-specific blue water footprint components.",
      "Estimate grey water footprint based on pollution load and allowable concentration.",
      "Evaluate wastewater quality parameters generated by selected industries."
    ],
    methodology:
      "The study used the Water Footprint Network approach. Monthly data for production, water consumption, abstraction, effluent discharge, and key pollutants were compiled for three selected industries. Blue water footprint was calculated from process water consumption and production quantity. Grey water footprint was estimated from pollutant load and dilution requirements.",
    findings: [
      "The work identifies water-intensive production steps and links them to pollution management needs.",
      "Reducing pollution load and increasing recycling are central to lowering the sector's water pressure.",
      "The findings provide a basis for more efficient industrial water management in Chattogram."
    ],
    keywords: ["Water footprint", "RMG industry", "Blue water", "Grey water", "Chattogram"],
    relatedPaperIds: ["rmg-wastewater", "gis-cht", "hed-mainee"]
  },
  {
    id: "gis-cht",
    slug: "gis-water-scarcity-chattogram-hill-tracts",
    title: "GIS-Based Water Scarcity Assessment in the Chattogram Hill Tracts",
    authors: "Asnaful Huda Asnaf, Mohammad Borhan Uddin, Mehrab Waliullah, Mainul Islam",
    year: "2026",
    category: "GIS and Water Scarcity",
    publicationType: "Conference paper",
    venue: "8th International Conference on Advances in Civil Engineering, CUET",
    status: "Accepted",
    highlight: "Spatial water scarcity mapping across a fragile hilly region.",
    summary:
      "A GIS-based multi-criteria assessment of water scarcity in Rangamati, Bandarban, and Khagrachhari using topographic, drainage, and land-use indicators.",
    abstract:
      "Water scarcity is a growing concern in the Chattogram Hill Tracts, where seasonal shortages affect remote hilly communities and indigenous populations. This study evaluates the spatial distribution of water scarcity over multiple decades using GIS-based multi-criteria analysis. The work considers elevation, slope, drainage density, stream order, and land-use and land-cover change to develop water scarcity index maps. Results indicate a continuing increase in water scarcity, with declining low-scarcity areas and expanding high and severe scarcity zones. Forest loss, urbanization, and land-use change were identified as major drivers.",
    context:
      "The Chattogram Hill Tracts differ from flat floodplain Bangladesh because of rugged hills, steep slopes, narrow valleys, and complex drainage systems. Surface water availability is strongly affected by terrain and seasonal drying of springs and streams.",
    objectives: [
      "Assess spatial water scarcity patterns in the Chattogram Hill Tracts.",
      "Use GIS-based multi-criteria analysis to combine topographic, hydrological, and land-use indicators.",
      "Identify priority areas for sustainable land-use and water resource management."
    ],
    methodology:
      "DEM-derived elevation and slope maps were prepared in ArcGIS. Flow direction and flow accumulation supported drainage and stream-order analysis. Land-use and land-cover patterns were evaluated for multiple years, and thematic layers were combined into water scarcity index maps.",
    findings: [
      "Forest cover reduction and growth of built-up or bare land increased water scarcity risk.",
      "High-elevation and steep-slope areas showed lower water-holding potential because of rapid runoff.",
      "Water scarcity index maps can support priority planning for vulnerable communities."
    ],
    keywords: ["GIS", "Water scarcity", "Chattogram Hill Tracts", "LULC", "Multi-criteria analysis"],
    relatedPaperIds: ["hed-mainee", "dharla-hms", "rmg-water-footprint"]
  },
  {
    id: "dharla-hms",
    slug: "rainfall-runoff-dharla-hec-hms",
    title: "Rainfall-Runoff Simulation of the Dharla River Basin Using HEC-HMS",
    authors: "Asnaful Huda Asnaf, Sifwat Alvi, Muntasir Mohammad Shoeb",
    year: "2026",
    category: "Hydrologic Modeling",
    publicationType: "Conference paper",
    venue: "3rd International Conference on Sustainable Development Through Excellence in Higher Education",
    status: "Accepted",
    highlight: "Event-based HEC-HMS modeling of an eight-subbasin river basin.",
    summary:
      "A rainfall-runoff model for the Dharla River Basin using DEM processing, SCS-CN losses, SCS Unit Hydrograph transformation, recession baseflow, and lag routing.",
    abstract:
      "Rainfall-runoff modeling helps explain watershed response to large rainfall events and supports flood risk assessment and water resources management. This study proposes a reactive HEC-HMS modeling approach for the Dharla River Basin in Bangladesh. The watershed was divided into eight subbasins, five reaches, five junctions, and one outlet with a drainage area of 1,540.9 km2. DEM processing, flow direction, flow accumulation, stream extraction, and watershed discretization were used to prepare the basin model. The model used SCS Curve Number losses, SCS Dimensionless Unit Hydrograph transformation, recession baseflow, and lag routing. A 326 mm storm event produced a simulated discharge of about 1,984 m3/s at the downstream outlet.",
    context:
      "The Dharla River Basin in northern Bangladesh has high hydrological variability and seasonal flooding. A distributed basin model helps interpret how rainfall-generated runoff accumulates and routes downstream.",
    objectives: [
      "Delineate and discretize the Dharla Basin using GIS-based terrain analysis.",
      "Create an eight-subbasin HEC-HMS basin model.",
      "Simulate a high-intensity storm event and provide a framework for calibration, validation, and future forecasting."
    ],
    methodology:
      "The workflow used DEM terrain processing to derive flow direction, flow accumulation, stream networks, watershed boundaries, and subbasins. HEC-HMS represented subbasins, reaches, junctions, and the outlet. Rainfall and discharge data from Lalmonirhat, Kurigram, and SW77 gauging stations supported model development and checking.",
    findings: [
      "Runoff depth varied substantially across subbasins, ranging from 76.12 mm to 258.49 mm.",
      "Simulated flow increased downstream through the connected model network to about 1,984 m3/s at the outlet.",
      "Calibration and validation results showed useful agreement at the selected stations."
    ],
    keywords: ["HEC-HMS", "Dharla River", "Rainfall-runoff", "SCS-CN", "Flood assessment"],
    relatedPaperIds: ["feni-flood", "hed-mainee", "gis-cht"]
  },
  {
    id: "ceramic-concrete",
    slug: "no-fines-concrete-waste-ceramic",
    title: "No-Fines Concrete Using Waste Ceramic as Coarse Aggregate Replacement",
    authors: "Muntasir Mohammad Shoeb, Md. Jahedul Alam, Anika Tahsin, Asnaful Huda Asnaf",
    year: "2026",
    category: "Sustainable Construction Materials",
    publicationType: "Conference paper",
    venue: "3rd International Conference on Sustainable Development Through Excellence in Higher Education",
    status: "Accepted",
    highlight: "Waste ceramic replacement for permeable no-fines concrete.",
    summary:
      "An experimental study of no-fines concrete mixes where waste ceramic partially replaces natural coarse aggregate at 10 to 50 percent replacement levels.",
    abstract:
      "The construction industry faces increasing pressure to use environmentally responsible materials because of resource depletion, high emissions, and growing waste. This study investigates no-fines concrete in which waste ceramic partially replaces natural coarse aggregate. No-fines concrete is lightweight and porous, with interconnected voids that support water infiltration, making it useful for permeable pavements, road bases, parking areas, landscaping, and drainage-oriented applications. Natural coarse aggregate was replaced with waste ceramic at 10, 20, 30, 40, and 50 percent replacement levels. The study evaluated density, water absorption, porosity, and compressive strength to identify a practical balance between performance and waste utilization.",
    context:
      "Waste ceramic from tile, pottery, sanitary ware, and demolition activities can be diverted from landfill and used as a construction material. No-fines concrete offers a drainage-friendly application where aggregate behavior strongly controls performance.",
    objectives: [
      "Investigate how ceramic replacement affects physical and mechanical properties of no-fines concrete.",
      "Determine an optimum replacement level for performance and waste utilization.",
      "Support sustainable construction by reducing reliance on natural aggregate."
    ],
    methodology:
      "Ordinary Portland Cement, natural coarse aggregate, and crushed ceramic waste were used. A control mix and 10, 20, 30, 40, and 50 percent replacement mixes were prepared. Specimens were cured for 7, 14, and 28 days and tested for density, absorption, porosity, and compressive strength.",
    findings: [
      "The 20 percent ceramic replacement mix reached the highest reported 28-day compressive strength of 14.4 MPa.",
      "The control mix reached 8.5 MPa at 28 days, while the 50 percent replacement mix dropped to 4.8 MPa.",
      "Higher replacement levels increased porosity and absorption, reducing strength beyond the practical range."
    ],
    keywords: ["No-fines concrete", "Waste ceramic", "Sustainable construction", "Porosity", "Compressive strength"],
    relatedPaperIds: ["rmg-water-footprint", "rmg-wastewater", "gis-cht"]
  },
  {
    id: "feni-flood",
    slug: "flood-frequency-feni-river",
    title: "Flood Frequency Analysis Using Gumbel and Log-Pearson Type III Methods for Feni River",
    authors: "Asnaful Huda Asnaf, Umme Salsabil Ahmed",
    year: "2026",
    category: "Flood Risk Assessment",
    publicationType: "Conference paper",
    venue: "8th International Conference on Advances in Civil Engineering, CUET",
    status: "Accepted",
    highlight: "Design flood estimation using two statistical distributions.",
    summary:
      "A flood frequency analysis of annual peak discharge data for the Feni River using Gumbel Extreme Value and Log-Pearson Type III methods.",
    abstract:
      "Flood frequency analysis is a core hydrological procedure for defining flood magnitude and recurrence interval, which supports hydraulic structure design and flood risk management. This study evaluates flood characteristics of the Feni River in Bangladesh using Gumbel Extreme Value Distribution and Log-Pearson Type III Distribution. Annual peak discharge data from 2000 to 2021 were analyzed, with missing observations handled to improve the usable hydrologic series. Return periods of 2, 5, 10, 25, 50, and 100 years were estimated. The 100-year flood discharge was approximately 866 m3/s using the Gumbel method and 732.82 m3/s using Log-Pearson Type III.",
    context:
      "Flooding affects riverine communities, infrastructure, and agricultural activity in monsoonal Bangladesh. The Feni River has limited available flood frequency research, making statistical estimation useful for design and planning.",
    objectives: [
      "Estimate flood discharges for selected return periods.",
      "Compare Gumbel and Log-Pearson Type III distributions.",
      "Support hydraulic design and flood risk management with consistent flood estimates."
    ],
    methodology:
      "Annual peak discharge data were processed and statistical parameters such as mean, standard deviation, and skewness were calculated. Gumbel and Log-Pearson Type III methods were then applied for selected return periods.",
    findings: [
      "Flood discharge increased with return period for both statistical methods.",
      "Log-Pearson Type III gave slightly higher estimates at lower to moderate return periods, while Gumbel produced the higher 100-year estimate.",
      "The comparison improves confidence in design flood estimation for the study area."
    ],
    keywords: ["Flood frequency", "Gumbel", "Log-Pearson Type III", "Feni River", "Return period"],
    relatedPaperIds: ["dharla-hms", "hed-mainee", "gis-cht"]
  },
  {
    id: "rmg-wastewater",
    slug: "rmg-wastewater-characteristics-chattogram",
    title: "Wastewater Characteristics from Three RMG Industries in Chattogram",
    authors: "Mohammad Borhan Uddin, Asnaful Huda Asnaf, Priya Chowdhury",
    year: "2026",
    category: "Water Quality",
    publicationType: "Conference paper",
    venue: "8th International Conference on Advances in Civil Engineering, CUET",
    status: "Accepted",
    highlight: "Physicochemical and heavy metal assessment of industrial effluent.",
    summary:
      "A water quality study of wastewater samples from three RMG industries in Chattogram, including physicochemical and heavy metal parameters.",
    abstract:
      "Industrial effluents from the ready-made garment sector can affect aquatic ecosystems and public health. This study determines physicochemical and heavy metal parameters of wastewater from three RMG industries in Chattogram to assess pollution levels and treatment efficiency. Parameters included pH, TDS, turbidity, EC, salinity, alkalinity, chloride, hardness, COD, BOD, Fe, Cr6+, Cu, and Mn. Results showed considerable wastewater pollution. COD reached 128 mg/L in one industry, BOD reached 10.41 mg/L in another, turbidity exceeded standards, and Cr6+ and Mn exceeded permissible limits across all sampled industries.",
    context:
      "Textile production uses large volumes of water and chemicals. Even when effluent treatment plants are present, treated wastewater may still contain residual organic matter, turbidity, and heavy metals.",
    objectives: [
      "Characterize physicochemical and heavy metal parameters in selected RMG wastewater samples.",
      "Compare measured values with Bangladesh Environmental Conservation Rules limits.",
      "Assess treatment effectiveness and identify parameters of concern."
    ],
    methodology:
      "Wastewater samples were collected from three selected industries in Chattogram and analyzed using laboratory methods. Results were compiled, compared across industries, and checked against regulatory discharge limits.",
    findings: [
      "Cr6+ and Mn exceeded permissible limits in all industries.",
      "COD and BOD varied across industries, with the highest COD reported at 128 mg/L.",
      "The results support improved treatment operation, wastewater recycling, and regular monitoring."
    ],
    keywords: ["Wastewater", "RMG industry", "Heavy metals", "Effluent treatment", "Chattogram"],
    relatedPaperIds: ["rmg-water-footprint", "ceramic-concrete", "gis-cht"]
  }
];
