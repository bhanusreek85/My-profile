import Footer from '../components/Footer.jsx';

export default function SkillsPage() {
    return (
        <div className=" custom-bg-edu d-flex flex-column min-vh-100 bg-dark">
            <div className="flex-grow-1">
                <div className="container pt-3 pb-3">
                    <h1 className="text-center mb-4 gradient-text">Skills</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-primary">Technical Skills</h3>
                            <ul className="list-group">
                                <li className="list-group-item bg-white text-secondary">SAP ABAP</li>
                                <li className="list-group-item bg-white text-secondary">JavaScript</li>
                                <li className="list-group-item bg-white text-secondary">React</li>
                                <li className="list-group-item bg-white text-secondary">Node.js</li>
                                <li className="list-group-item bg-white text-secondary">Python</li>
                                <li className="list-group-item bg-white text-secondary">SQL</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-primary">Soft Skills</h3>
                            <ul className="list-group">
                                <li className="list-group-item bg-white text-secondary">Communication</li>
                                <li className="list-group-item bg-white text-secondary">Teamleading</li>
                                <li className="list-group-item bg-white text-secondary">Problem-solving</li>
                                <li className="list-group-item bg-white text-secondary">Project Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}