
  // Onload Animations for nav and front-page
  gsap.from("nav", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero-conts", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  gsap.from(".team img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    delay: 1,
  });
  gsap.from(".fact", { opacity: 0, y: 30, duration: 1, delay: 1.2 });

  // Scroll-triggered Animations
  gsap.registerPlugin(ScrollTrigger);

  // Features Section
  gsap.from(".Features-section .title", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: ".Features-section",
  });
  gsap.from(".title-features", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".title-features",
      start: "top 80%",
    },
  });
  gsap.from(".feature-box1", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".features",
      start: "top 75%",
    },
  });

  // User Feedback Section
  gsap.from(".user-feedback .title", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: ".user-feedback",
      start: "top 80%",
    },
  });
  gsap.from(".comment-box", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".comments",
      start: "top 75%",
    },
  });

  // Projects Section
  gsap.from(".projects .slider .item", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
    },
  });

  // Footer Section
  gsap.from(".footer", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
    },
  });