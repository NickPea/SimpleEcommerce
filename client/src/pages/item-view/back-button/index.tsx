//

import React from "react";
import styled from "styled-components";

//components
import IconSizerRUI from "../../../resusable-ui/icon-sizer-rui";
import ButtonRUI from "../../../resusable-ui/button-rui";

//resources
import BackSVG from "../../../resources/icons/back-svg";
import { useHistory } from "react-router-dom";

//styles
const Wrapper = styled.div``;

const BackButton = () => {
  const reactHistory = useHistory();
  return (
    <Wrapper>
      <ButtonRUI pop_up onClick={() => reactHistory.goBack()}>
        <IconSizerRUI h="30px" w="30px">
          <BackSVG />
        </IconSizerRUI>
      </ButtonRUI>
    </Wrapper>
  );
};

export default BackButton;
