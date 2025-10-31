# Dining Philosophers Problem - Interactive Visualization

An interactive web-based visualization of the classic Dining Philosophers Problem, demonstrating concurrent process synchronization, deadlock scenarios, and prevention strategies in operating systems.

## Overview

The Dining Philosophers Problem is a fundamental synchronization problem in computer science that illustrates the challenges of resource allocation in concurrent systems. This project provides an engaging, animated visualization to understand deadlock conditions and explore various solutions.

## Features

- **Interactive Simulation**: Real-time visualization of philosopher states (thinking, hungry, eating, blocked, satisfied)
- **Animated State Transitions**: Smooth animations showing resource acquisition and release
- **Multiple Scenarios**: 
  - Calm contemplation
  - Requests ripple through the system
  - Deadlock demonstration
  - Ordered access solution
  - Fair rotation implementation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Educational Content**: Clear explanations of Coffman conditions and prevention strategies

## Live Demo

Open `index.html` in your browser to start exploring the visualization.

## Project Structure

```
dining-philosophers/
├── index.html              # Main landing page
├── setup.html             # Problem definition and setup
├── deadlock.html          # Deadlock conditions explained
├── interactive.html       # Interactive simulation
├── solutions.html         # Prevention strategies
├── takeaways.html         # Key insights and summary
├── styles.css             # All styling and animations
├── app.js                 # Simulation logic
└── DINING_PHILOSOPHERS_DOCUMENTATION.md  # Detailed documentation
```

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Animations, transitions, and responsive layout
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Modern CSS Grid & Flexbox** - Responsive layouts

## Key Concepts Demonstrated

### Deadlock Conditions (Coffman Conditions)
1. **Mutual Exclusion**: Only one philosopher can use a fork at a time
2. **Hold and Wait**: Philosophers hold one fork while waiting for another
3. **No Preemption**: Forks cannot be forcibly taken away
4. **Circular Wait**: Each philosopher waits for the next philosopher's fork

### Prevention Strategies
1. **Resource Ordering**: Impose a global order on resource acquisition
2. **Arbitrator**: Central coordinator manages fork distribution
3. **Asymmetric Solution**: Break symmetry by having one philosopher act differently

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dining-philosophers.git
   ```

2. Open `index.html` in a modern web browser

3. Navigate through different sections:
   - **Problem Setup**: Understand the basic scenario
   - **Deadlock Analysis**: See how deadlock occurs
   - **Interactive Simulation**: Click storyline cards to animate different phases
   - **Solutions**: Explore prevention strategies
   - **Summary**: Review key takeaways

## Interactive Controls

In the simulation page (`interactive.html`):
- Click on **storyline cards** to trigger different phases
- Observe **state color changes**:
  - 🔵 **Cyan**: Thinking
  - 🟠 **Orange**: Hungry
  - 🟢 **Green**: Eating
  - 🔴 **Red**: Blocked
  - 🟣 **Purple**: Satisfied

## Educational Value

This visualization helps students and developers understand:
- Concurrent process synchronization
- Resource allocation in multi-threaded systems
- Deadlock detection and prevention
- Trade-offs between different synchronization strategies
- Real-world applications in operating systems, databases, and distributed systems

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Requires a modern browser with ES6+ support and CSS Grid.

## Authors

- **Anshumaan Das** - RA2411056010283
- **Ankit Kumar** - RA2411056010259

## Course Information

**Course**: Operating Systems  
**Date**: November 2025

## References

- Dijkstra, E. W. (1965). "Solution of a problem in concurrent programming control"
- Operating System Concepts by Silberschatz, Galvin, and Gagne
- Modern Operating Systems by Andrew S. Tanenbaum

## License

This project is created for educational purposes.

## Acknowledgments

- Inspired by Edsger Dijkstra's original formulation of the Dining Philosophers Problem
- Built with modern web technologies for interactive learning
- Special thanks to our instructors and the computer science community

---

**Note**: This is an educational project demonstrating synchronization concepts in operating systems through interactive visualization.
