"use client";

import { Features } from "../features";
import { CustomRoadmapsIcon } from "../icons/features/set-directions-icons/custom-roadmaps";
import { MultiTeamProjectsIcon } from "../icons/features/set-directions-icons/multi-team-projects";
import { PersonalNotificationsIcon } from "../icons/features/set-directions-icons/personal-notifications";
import { ProjectDocumentsIcon } from "../icons/features/set-directions-icons/project-documents";
import { ProjectInsightsIcon } from "../icons/features/set-directions-icons/project-insights";
import { TimelineViewIcon } from "../icons/features/set-directions-icons/timeline-view";

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={<>Compliance & Reporting</>}
        image="img/six/2.png"
        imageSize="large"
        text="Ensures labor law compliance and provides detailed work reports for better insights."
      />
      <Features.Grid
        features={[
          {
            icon: MultiTeamProjectsIcon,
            title: "Custom Breaks & Availability.",
            text: "Allows employees to set break times and preferred work hours.",
          },
          {
            icon: ProjectDocumentsIcon,
            title: "Shift Analytics",
            text: "Provides insights into employee schedules, attendance, and productivity.",
          },
          {
            icon: CustomRoadmapsIcon,
            title: "Compliance & Reporting",
            text: "Ensures labor law compliance and provides detailed work reports for better insights.",
          },
          {
            icon: TimelineViewIcon,
            title: "Employee Availability ",
            text: "Employees can set preferred working hours for better scheduling.",
          },
          {
            icon: ProjectInsightsIcon,
            title: "Offline Access ",
            text: "View schedules and important updates even without an internet connection.",
          },
          {
            icon: PersonalNotificationsIcon,
            title: "Leave & Absence Management",
            text: "Track vacation days, sick leaves, and other absences efficiently.",
          },
          {
            icon: ProjectInsightsIcon,
            title: "Offline Access ",
            text: "View schedules and important updates even without an internet connection.",
          },
          {
            icon: PersonalNotificationsIcon,
            title: "Customizable Shift Templates",
            text: "Save and reuse shift patterns to streamline scheduling.",
          },
          {
            icon: PersonalNotificationsIcon,
            title: "Shift Notifications",
            text: "Instantly alerts employees about shift changes or new assignments.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "img/six/2.png",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[7%]",
            title: "Project updates",
            text: "Keep everyone up-to-date on the health and progress of projects.",
          },
          {
            image: "img/six/5.png",
            imageClassName: "top-[55%] md:top-[40%] w-full left-[2%]",
            title: "Focus on the big picture",
            text: "Explore every company project in one view to easily identify what needs attention.",
          },
        ]}
      />
    </Features>
  );
};
