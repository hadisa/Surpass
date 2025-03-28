"use client";

import { Features } from "../features";
import { Features2 } from "../featureSection";
import { AutomaticTrackingIcon } from "../icons/features/build-momentum-icons/automatic-tracking";
import { BePreparedIcon } from "../icons/features/build-momentum-icons/be-prepared";
import { FullyConfigurableIcon } from "../icons/features/build-momentum-icons/fully-configurable";
import { PredictDelaysIcon } from "../icons/features/build-momentum-icons/predict-delays";
import { ScheduledIcon } from "../icons/features/build-momentum-icons/scheduled";
import { ScopeCreepIcon } from "../icons/features/build-momentum-icons/scope-creep";

export const BuildMomentum = () => {
  return (
    <Features2 color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={<>Task Management</>}
        image="img/six/4.png"
        imageSize="large"
        text="Taskly simplifies workforce management with shift scheduling, time tracking, shift swaps, and real-time communication. Its task management and seamless integration enhance team coordination and productivity."
      />
      <Features.Grid
        features={[
          {
            icon: AutomaticTrackingIcon,
            title: "Automatic tracking.",
            text: "Any started issues are added to the current cycle.",
          },
          {
            icon: ScheduledIcon,
            title: "Scheduled.",
            text: "Unfinished work rolls over to the next cycle automatically.",
          },
          {
            icon: FullyConfigurableIcon,
            title: "Fully configurable.",
            text: "Define start date, end date, duration, and more.",
          },
          {
            icon: PredictDelaysIcon,
            title: "Predict delays.",
            text: "Get warnings for at-risk cycles.",
          },
          {
            icon: ScopeCreepIcon,
            title: "Scope creep.",
            text: "Understand which issues are added mid-cycle.",
          },
          {
            icon: BePreparedIcon,
            title: "Be prepared.",
            text: "Schedule work in advance with upcoming cycles.",
          },
        ]}
      />
    </Features2>
  );
};
