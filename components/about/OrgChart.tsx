import styled from "styled-components";
import { Tree, TreeNode } from "react-organizational-chart";

const OrgChart = () => {
  return (
    <Container>
      <Tree
        label={
          <StyledRoot>
            <RootTitle>Managing Director</RootTitle>
          </StyledRoot>
        }
        lineBorderRadius="10px"
        lineColor="salmon"
        lineHeight="30px"
        lineWidth="3px"
        nodePadding="5px"
      >
        <TreeNode label={<StyledLabel>Director</StyledLabel>}></TreeNode>
        <TreeNode label={<StyledLabel>General Manager</StyledLabel>}>
          <TreeNode label={<StyledLabel>Finance</StyledLabel>}>
            <TreeNode label={<StyledLabel>AP</StyledLabel>}></TreeNode>
            <TreeNode label={<StyledLabel>AR</StyledLabel>}></TreeNode>
            <TreeNode label={<StyledLabel>Cashier</StyledLabel>}></TreeNode>
          </TreeNode>
          <TreeNode label={<StyledLabel>Procurement & Logistics</StyledLabel>}>
            <TreeNode label={<StyledLabel>Warehouse</StyledLabel>}></TreeNode>
            <TreeNode
              label={<StyledLabel>Delivery & Transportation</StyledLabel>}
            ></TreeNode>
          </TreeNode>
          <TreeNode label={<StyledLabel>Selling and Distribution</StyledLabel>}>
            <TreeNode
              label={<StyledLabel>RSM Upper Myanmar</StyledLabel>}
            ></TreeNode>
            <TreeNode
              label={<StyledLabel>RSM Lower Myanmar</StyledLabel>}
            ></TreeNode>
            <TreeNode label={<StyledLabel>Tele Sales</StyledLabel>}></TreeNode>
          </TreeNode>
          <TreeNode label={<StyledLabel>Marketing</StyledLabel>}>
            <TreeNode label={<StyledLabel>Branding</StyledLabel>}></TreeNode>
            <TreeNode label={<StyledLabel>Advertising</StyledLabel>}></TreeNode>
          </TreeNode>
          <TreeNode label={<StyledLabel>HR</StyledLabel>}>
            <TreeNode label={<StyledLabel>Admin</StyledLabel>}></TreeNode>
            <TreeNode label={<StyledLabel>IT</StyledLabel>}></TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
    </Container>
  );
};

export default OrgChart;

const Container = styled.div`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledRoot = styled.div`
  color: plum;
  background-color: salmon;
  margin: 0px 20%;
  padding: 2%;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    margin: 0px 5%;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const RootTitle = styled.h3`
  color: white;
`;

const RootText = styled.p`
  color: white;
`;

const StyledLabel = styled.div`
  padding: 5px 10px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid salmon;
  color: #444444;
`;
