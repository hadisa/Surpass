import classNames from "classnames";
import { Container } from "../components/container";
import { BuildMomentum } from "../components/sections/build-momentum";
import { EnjoyIssueTracking } from "../components/sections/enjoy-issue-tracking";
import { HomePageHero } from "../components/sections/homepage-hero";
import { MainFeaturesGrid } from "../components/sections/main-features-grid";
import { SetDirection } from "../components/sections/set-direction";
import LayoutBuble from "./LayoutBuble";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <LayoutBuble>
          <Container className="pt-[6.4rem]">
            <HomePageHero />
          </Container>
        </LayoutBuble>
      </div>

      <MainFeaturesGrid />

      <EnjoyIssueTracking />

      <BuildMomentum />
      <SetDirection />
    </>
  );
}
