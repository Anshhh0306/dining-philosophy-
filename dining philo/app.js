const SCENES = [
    {
        title: "Calm contemplation",
        description: "All philosophers are thinking. No forks are claimed, so shared resources are completely free.",
        philosophers: ["thinking", "thinking", "thinking", "thinking", "thinking"],
        forks: ["", "", "", "", ""]
    },
    {
        title: "Requests ripple around",
        description: "Hunger spreads clockwise. Three philosophers grab their left fork first, introducing contention.",
        philosophers: ["hungry", "thinking", "hungry", "thinking", "hungry"],
        forks: ["busy", "", "busy", "", "busy"]
    },
    {
        title: "Deadlock freeze",
        description: "Everyone now clutches one fork and waits for the other. All resources are busy and nothing progresses.",
        philosophers: ["blocked", "blocked", "blocked", "blocked", "blocked"],
        forks: ["busy", "busy", "busy", "busy", "busy"]
    },
    {
        title: "Ordered access policy",
        description: "A strict ordering lets selected philosophers claim both forks, eat, then release, breaking the circular wait.",
        philosophers: ["eating", "hungry", "thinking", "eating", "hungry"],
        forks: ["busy", "busy", "", "busy", "busy"]
    },
    {
        title: "Fair rotation resumes",
        description: "Forks continue rotating in order. Waiting philosophers get their turn and starvation stays away.",
        philosophers: ["satisfied", "eating", "thinking", "thinking", "satisfied"],
        forks: ["", "busy", "", "", ""]
    }
];

const sceneChips = document.querySelectorAll(".scene-chip");
const stateTitle = document.getElementById("stateTitle");
const stateDescription = document.getElementById("stateDescription");
const philosopherEls = document.querySelectorAll(".philosopher.sim");
const forkEls = document.querySelectorAll(".fork.sim");
const revealSections = document.querySelectorAll(".reveal");
const storySteps = document.querySelectorAll(".story-step");

let currentScene = 0;

function updateScene(index) {
    if (philosopherEls.length === 0 || forkEls.length === 0) {
        currentScene = index;
        return;
    }

    const scene = SCENES[index];

    philosopherEls.forEach((el, i) => {
        el.classList.remove("thinking", "hungry", "eating", "blocked", "satisfied");
        if (scene.philosophers[i]) {
            el.classList.add(scene.philosophers[i]);
        }
    });

    forkEls.forEach((el, i) => {
        el.classList.remove("busy");
        if (scene.forks[i]) {
            el.classList.add(scene.forks[i]);
        }
    });

    storySteps.forEach((step) => {
        const stepScene = Number(step.dataset.scene);
        step.classList.toggle("active", stepScene === index);
    });

    if (sceneChips.length > 0) {
        sceneChips.forEach((chip) => {
            const chipScene = Number(chip.dataset.scene);
            const isActive = chipScene === index;
            chip.classList.toggle("is-active", isActive);
            chip.setAttribute("aria-pressed", String(isActive));
        });
    }

    currentScene = index;
}

function handleSceneChipClick(event) {
    const chip = event.currentTarget;
    const index = Number(chip.dataset.scene);
    if (!Number.isNaN(index) && index !== currentScene) {
        updateScene(index);
    }
}

function setupRevealOnScroll() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealSections.forEach((section) => observer.observe(section));
}

function setupStorylineSync() {
    if (!storySteps.length) {
        return;
    }

    const stickyStage = document.querySelector('.sticky-stage');
    
    storySteps.forEach((step) => {
        step.addEventListener("click", () => {
            const sceneIndex = Number(step.dataset.scene);
            if (!Number.isNaN(sceneIndex)) {
                updateScene(sceneIndex);
                
                // Show the sticky stage on click
                if (stickyStage) {
                    stickyStage.classList.add('is-visible');
                }
            }
        });
        
        // Show table on hover
        step.addEventListener("mouseenter", () => {
            const sceneIndex = Number(step.dataset.scene);
            if (!Number.isNaN(sceneIndex)) {
                updateScene(sceneIndex);
                
                if (stickyStage) {
                    stickyStage.classList.add('is-visible');
                }
            }
        });
    });
    
    // Optional: Hide when mouse leaves the entire interactive area
    const interactiveWrapper = document.querySelector('.interactive-wrapper');
    if (interactiveWrapper && stickyStage) {
        interactiveWrapper.addEventListener("mouseleave", () => {
            // Only hide if not clicked (add a flag to track clicks)
            if (!stickyStage.dataset.locked) {
                stickyStage.classList.remove('is-visible');
            }
        });
        
        // Lock when clicking on story steps
        storySteps.forEach((step) => {
            step.addEventListener("click", () => {
                if (stickyStage) {
                    stickyStage.dataset.locked = "true";
                }
            });
        });
    }
}

function setupRipples() {
    const rippleTargets = document.querySelectorAll(".btn, .slide-card, .nav-btn");

    rippleTargets.forEach((target) => {
        target.addEventListener("click", (event) => {
            const rect = target.getBoundingClientRect();
            const ripple = document.createElement("span");
            ripple.className = "ripple-effect";
            const size = Math.max(rect.width, rect.height) * 1.3;
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;

            target.appendChild(ripple);

            ripple.addEventListener("animationend", () => {
                ripple.remove();
            });
        });
    });
}

function init() {
    setupRevealOnScroll();
    setupRipples();

    if (philosopherEls.length && forkEls.length) {
        updateScene(0);
        setupStorylineSync();
    }
}

window.addEventListener("DOMContentLoaded", init);
