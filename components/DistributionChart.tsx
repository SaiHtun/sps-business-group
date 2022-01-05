import styled from "styled-components";
import { Tree, TreeNode } from "react-organizational-chart";

const DistributionChart = () => {
  return (
      <Tree
        label={
          <StyledRoot>
            <RootTitle>SPS Techonology Co,.ltd.</RootTitle>
            <RootText>Retail-SPS Wholesale-MMD Distribution</RootText>
          </StyledRoot>
        }
        lineBorderRadius={"10px"}
        lineColor="salmon"
        lineHeight={"30px"}
        lineWidth={"3px"}
        nodePadding={"5px"}
      >
        <TreeNode label={<StyledLabel>Consumer</StyledLabel>}></TreeNode>
        <TreeNode label={<StyledLabel>Whlesale</StyledLabel>}>
          <TreeNode label={<StyledLabel>Retailer</StyledLabel>}>
            <TreeNode label={<StyledLabel>Consumer</StyledLabel>}></TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledLabel>Distributor</StyledLabel>}>
          <TreeNode label={<StyledLabel>Retailer</StyledLabel>}>
            <TreeNode label={<StyledLabel>Consumer</StyledLabel>}></TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
  );
};

export default DistributionChart;


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
