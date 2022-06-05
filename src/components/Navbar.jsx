import { SearchOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-item: center;
  justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  margin-right: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Anc.Noires</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <SearchOutlined style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <Language>English</Language>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
