import {
  NavBarCont,
  NavFolder,
  LinkList,
  IconsList,
  LinkCont,
  NavLink,
  SandwichIcon,
  Line1,
  Line2,
  Line3,
  TabIndicator,
  LogoIcon,
  EstimateBtn,
} from "./NavStyle";
import { useState, useEffect, useRef } from "react";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as AboutIcon } from "../../assets/icons/about.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/icons/projects.svg";
import { ReactComponent as ServicesIcon } from "../../assets/icons/services.svg";
import { ReactComponent as ContactIcon } from "../../assets/icons/contact.svg";
import { ReactComponent as EstimateIcon } from "../../assets/icons/clipboard.svg";
// import { useNavigate, useLocation } from "react-router-dom";

export default function Nav() {
  const [navModal, setNavModal] = useState(false);
  const [frames, setFrames] = useState([]);
  // let navigate = useNavigate();
  let location = { pathname: "_" };
  const linkList = useRef(null);

  //this use effect will add event hooks to the document when the nav is opened
  //event hooks are removed when the nav is closed
  useEffect(() => {
    console.log(frames);
    setFrames(document.getElementsByTagName("iframe"));
    var iframeDetector = {
      iframeMouseOver: false,
    };
    function hideOnClickOutside(element) {
      const outsideClickListener = (event) => {
        if (!element.contains(event.target) && navModal) {
          setNavModal(false);
          removeClickListener();
        }
      };
      //Dont for get to add an ID to each of your iFrames
      const removeClickListener = () => {
        document.removeEventListener("click", outsideClickListener);
        window.removeEventListener("blur", () => {
          setNavModal(false);
          removeClickListener();
        });
        for (let i = 0; i < frames.length; ++i) {
          document
            .getElementById(frames[i].id)
            .removeEventListener("mouseover", function () {
              iframeDetector.iframeMouseOver = true;
            });
          document
            .getElementById(frames[i].id)
            .removeEventListener("mouseout", function () {
              iframeDetector.iframeMouseOver = false;
            });
        }
      };
      //Dont for get to add an ID to each of your iFrames
      const addListener = () => {
        for (let i = 0; i < frames.length; ++i) {
          document
            .getElementById(frames[i].id)
            .addEventListener("mouseover", function () {
              iframeDetector.iframeMouseOver = true;
            });
          document
            .getElementById(frames[i].id)
            .addEventListener("mouseout", function () {
              iframeDetector.iframeMouseOver = false;
            });
        }
        window.addEventListener("blur", () => {
          setNavModal(false);
          removeClickListener();
        });

        document.addEventListener("click", outsideClickListener);
      };

      navModal && addListener();
    }
    // hideOnClickOutside(linkList.current);
  }, [frames, navModal]);

  ////tests for over flow parents
  // useEffect(()=>{
  //   let parent = document.querySelector(".navBarTest").parentElement && document.querySelector(".navBarTest").parentElement;
  //   console.log(parent);
  //    while (parent) {
  //     const hasOverflow = getComputedStyle(parent).overflow;
  //     console.log(hasOverflow);
  //     if (hasOverflow !== "visible") {
  //       console.log(hasOverflow, parent);
  //     }
  //     parent = parent.parentElement;
  //   }
  // })

  return (
    <NavBarCont className='navBarTest' navModal={navModal}>
      <LogoIcon onClick={() => console.log("/")}>
        <img
          src={process.env.PUBLIC_URL + "/images/logo_color.svg"}
          alt='K.A. Construction'
        />
      </LogoIcon>

      <NavFolder>
        <LinkList ref={linkList} navModal={navModal}>
          <LinkCont>
            <NavLink onClick={() => console.log("/")} highlight={true}>
              <HomeIcon />
              Home
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink onClick={() => console.log("/about")}>
              <AboutIcon />
              About
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink onClick={() => console.log("/projects")}>
              <ProjectsIcon />
              Projects
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink onClick={() => console.log("/services")}>
              <ServicesIcon />
              Services
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink onClick={() => console.log("/contact")}>
              <ContactIcon/>
              Contact
            </NavLink>
          </LinkCont>
        </LinkList>
      </NavFolder>
      <IconsList>
        <EstimateBtn>
          <EstimateIcon fill='white' />
          Estimate
        </EstimateBtn>
        <LinkCont>
          <SandwichIcon
            onClick={() => {
              setNavModal(!navModal);
            }}
          >
            <Line1 navModal={navModal} />
            <Line2 navModal={navModal} />
            <Line3 navModal={navModal} />
          </SandwichIcon>
        </LinkCont>
      </IconsList>
    </NavBarCont>
  );
}
