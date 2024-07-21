import { Link } from 'react-router-dom';
import './Public.css'; // Import your CSS file
import { FaStickyNote, FaPhoneAlt, FaLock, FaUserShield, FaTachometerAlt, FaCalendarWeek, FaTools } from 'react-icons/fa';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">TechNotes</span></h1>
            </header>
            <main className="public__main">
                <p>Efficiently manage your tasks and communication with our streamlined platform</p>
                <div className="features">
                    <div className="feature-item">
                        <FaStickyNote className="feature-icon" />
                        <h2>Digital Sticky Notes</h2>
                        <p>Replace physical notes with a digital, easy-to-use system.</p>
                    </div>
                    <div className="feature-item">
                        <FaPhoneAlt className="feature-icon" />
                        <h2>Public Contact Info</h2>
                        <p>Quick access to essential contact details.</p>
                    </div>
                    <div className="feature-item">
                        <FaLock className="feature-icon" />
                        <h2>Secure Login</h2>
                        <p>Personalized welcome and access to your tasks.</p>
                    </div>
                    <div className="feature-item">
                        <FaUserShield className="feature-icon" />
                        <h2>Role-Based Access</h2>
                        <p>Employees view/edit their own notes.  Managers/Admins have full access.</p>
                    </div>
                    <div className="feature-item">
                        <FaTachometerAlt className="feature-icon" />
                        <h2>Note Management</h2> 
                        <p>Track notes by ticket  and status (OPEN/COMPLETED).</p>
                    </div>
                    <div className="feature-item">
                        <FaCalendarWeek className="feature-icon" />
                        <h2>Regular Login</h2>
                        <p>Login at least once a week for security.</p>
                    </div>
                    <div className="feature-item">
                        <FaTools className="feature-icon" />
                        <h2>Flexible Access</h2>
                        <p>Rapidly adjust employee access and permissions.</p>
                    </div>
                </div>

                <br />
                <p>Owner: K Kushal</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    );
    return content;
};

export default Public;
