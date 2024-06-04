import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to Our Project</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices massa, et pharetra justo fermentum nec.</p>
            <img src="path_to_your_company_image.jpg" alt="Company" />
            <h2>Our Team</h2>
            <div className='team'>
                <div className='team-member'>
                    <img src="path_to_team_member_1_image.jpg" alt="Team member 1" />
                    <p>Team member 1</p>
                </div>
                <div className='team-member'>
                    <img src="path_to_team_member_2_image.jpg" alt="Team member 2" />
                    <p>Team member 2</p>
                </div>

                <div className='team-member'>
                    <img src="path_to_team_member_3_image.jpg" alt="Team member 3" />
                    <p>Team member 3</p>
                </div>

                <div className='team-member'>
                    <img src="path_to_team_member_4_image.jpg" alt="Team member 4" />
                    <p>Team member 4</p>
                </div>

                <div className='team-member'>
                    <img src="path_to_team_member_5_image.jpg" alt="Team member 5" />
                    <p>Team member 5</p>
                </div>

                <div className='team-member'>
                    <img src="path_to_team_member_6_image.jpg" alt="Team member 6" />
                    <p>Team member 6</p>
                </div>
            
                <div className='team-member'>
                    <img src="path_to_team_member_7_image.jpg" alt="Team member 7" />
                    <p>Team member 7</p>
                </div>

            </div>
        </div>
    );
}

export default Home;