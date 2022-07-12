import { Container } from "../container";
import { BoltIllustration } from "../illustrations/bolt";

export const MainFeaturesGrid = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Simplifying Workforce Management
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          Taskly streamlines shift scheduling, time tracking, and team
          communication, ensuring efficiency and seamless workflow integration.
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          {/* <KeyboardShortcuts />
          <p className="mb-4 text-3xl">Built for your keyboard</p>
          <p className="text-md text-primary-text">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p> */}
          <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
            The Ultimate Workforce
            <br className="hidden md:inline-block" /> Management Solution
          </h2>
          <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
            Taskly is a powerful workforce management tool designed for
            frontline teams. It offers easy shift scheduling, allowing managers
            to assign shifts while employees can swap or request changes
            effortlessly. The time clock feature enables accurate clock-ins and
            outs, while real-time communication keeps teams connected. With deep
            integration into productivity tools, Taskly enhances efficiency by
            syncing schedules and streamlining workflows, making it an essential
            solution for workforce management.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <BoltIllustration />
          </div>
          <p className="mb-4 text-3xl">Breathtakingly fast</p>
          <p className="text-md text-primary-text">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
      
      </div>
    </div>
  </div>
);
