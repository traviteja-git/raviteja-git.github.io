import React from 'react';
import Skills from '../skills/Skills';
import StackProgress from '../skillProgress/skillProgress';
import Education from '../education/Education';
import WorkExperience from '../workExperience/WorkExperience';
import Certification from '../certification/Certification';
import Achievement from '../achievement/Achievement';
import Profile from '../profile/Profile';

// Groups the previous home sections into a single About block
export default function About() {
  return (
    <div id="about">
      <Skills />
      <StackProgress />
      <Education />
      <WorkExperience />
      <Certification />
      <Achievement />
      <Profile />
    </div>
  );
}
