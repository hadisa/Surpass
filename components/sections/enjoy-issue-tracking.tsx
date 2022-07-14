"use client";

import { Container } from "../container";
import FeatureCards from "../featureCards";
import { Features } from "../features";
import { Features2 } from "../featureSection";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const EnjoyIssueTracking = () => {
  return (
    <Features2 color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Issue tracking
            <br />
            you'll enjoy using
          </>
        }
        image="/img/six/6.png"
        text="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Shift Scheduling.",
            text: "Easily create, assign, and modify shifts while employees can request swaps or open shifts.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Time Clock",
            text: "Enables employees to clock in and out directly from the app, ensuring accurate work hour tracking.",
          },
          {
            icon: WorkflowsIcon,
            title: "Shift Swaps & Requests",
            text: " Employees can request shift swaps, time off, or offer shifts for others to pick up.",
          },
          {
            icon: CustomViewsIcon,
            title: "Real-Time Communication",
            text: "Integrated chat and notifications keep teams informed and connected.",
          },
          {
            icon: DiscussionIcon,
            title: "Task Management.",
            text: "Assign tasks within shifts to ensure clarity and accountability.",
          },
          {
            icon: IssuesIcon,
            title: "Permissions & Role-Based Access",
            text: "Managers can control access levels and customize permissions for employees.",
          },
        ]}
      />
      <FeatureCards
        features={[
          {
            image: "/img/six/7.png",
            imageClassName: "top-[55%] md:top-[40%] w-[200%]",
            title: "List and board",
            text: "Switch between list and board layout to view work from any angle.",
          },
          {
            image: "/img/six/6.png",
            imageClassName:
              "top-[45%] left-[12px] md:top-[34%] md:left-[24px] w-[110%]",
            title: "Make it yours",
            text: "Quickly apply filters and operators to refine your issue lists and create custom views.",
          },
        ]}
      />
    </Features2>
  );
};
