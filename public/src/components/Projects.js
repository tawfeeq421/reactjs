import React from 'react';

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Project 1</h3>
                    <p>Description of project 1.</p>
                </div>
                <div className="project-item">
                    <h3>Project 2</h3>
                    <p>Description of project 2.</p>
                </div>
                {/* Add more projects as needed */}
            </div>
        </section>
    );
}

export default Projects;
