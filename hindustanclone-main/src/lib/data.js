export const articles = [
    {
        id: "1",
        title: "India Unveils Advanced Weather Satellite for Cyclone Prediction",
        summary: "ISRO launches INSAT-4X, a new-generation satellite aimed at improving real-time cyclone tracking and monsoon forecasting.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        category: "Science",
        date: "2024-02-10",
        content: "The Indian Space Research Organisation has successfully deployed the INSAT-4X satellite from Sriharikota. Equipped with upgraded thermal imaging sensors and rapid-scan capabilities, INSAT-4X will enhance India’s ability to predict cyclones and monitor monsoon developments. Scientists expect a 25% improvement in early warnings for extreme weather events."
    },
    {
        id: "2",
        title: "Rupee Strengthens as Global Oil Prices Decline Sharply",
        summary: "The Indian rupee gained momentum against the dollar after Brent crude prices dropped to a 10-month low.",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        category: "Business",
        date: "2024-02-09",
        content: "A significant fall in global crude oil prices has boosted investor confidence in emerging markets. India's currency saw its strongest single-day rise in four months. Economists predict that lower import costs will ease inflationary pressure and potentially influence the Reserve Bank to reconsider its tight monetary stance in the upcoming policy review."
    },
    {
        id: "3",
        title: "India Clinches T20 Series Against South Africa in Decisive Final Match",
        summary: "A power-packed performance from young players helped India secure the T20 series 2-1.",
        image: "https://images.unsplash.com/photo-1505842465776-3d90f616310d?auto=format&fit=crop&w=800&q=80",
        category: "Sports",
        date: "2024-02-08",
        content: "India delivered an exceptional all-round performance in the series decider at Johannesburg. After posting a competitive total of 186, the Indian bowling attack restricted South Africa with disciplined line and length. The match featured outstanding fielding efforts and a breakout performance by a debutant fast bowler."
    },
    {
        id: "4",
        title: "Breakthrough AI App Helps Users Build Full Apps Using Voice Commands",
        summary: "Tech startup 'DevWave' launches an AI system that converts spoken instructions into deployable code.",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
        category: "Technology",
        date: "2024-02-07",
        content: "DevWave’s new platform allows users to describe the app they want using natural language. The system then generates front-end, back-end, and database structures automatically. Early demos show the AI successfully building dashboards, login systems, and CRUD APIs within minutes. Analysts say it could significantly lower the barrier for non-developers."
    },
    {
        id: "5",
        title: "Spring Carnival Sees Huge Crowd as Local Artists Take Center Stage",
        summary: "The annual Spring Carnival recorded its highest footfall ever with a surge in young visitors.",
        image: "", // keeping missing image for testing
        category: "Lifestyle",
        date: "2024-02-07",
        content: "The city's Spring Carnival drew massive crowds this year, with live performances, handicraft exhibitions, and food stalls becoming major attractions. Organizers credit the turnout to enhanced digital promotion and collaborations with local influencers. The event also featured a dedicated zone to promote sustainable living practices."
    },
    {
        id: "6",
        title: "Ultra-Long Headline Used to Test Responsiveness of News Cards in Modern UI Layouts and Ensure Proper Truncation Without Breaking the Design",
        summary: "A purposely extended title is used to validate layout stability and text-wrapping behavior across screen sizes.",
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
        category: "Test",
        date: "2024-02-06",
        content: "This article serves as a stress test for UI elements. Long text blocks often reveal flaws in responsiveness, especially when dealing with multi-line titles. Developers can use such samples to refine CSS rules like text-overflow, line-clamp, and flexbox behavior to ensure consistent presentation."
    }
];


export async function getArticles() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return articles;
}

export async function getArticleById(id) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return articles.find(article => article.id === id);
}
