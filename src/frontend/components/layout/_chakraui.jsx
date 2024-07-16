import React from "react";
import "../../design/layoutdesign/banner.scss";
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const ChakraUi = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton px={4} py={2} transition="all 0.2s" borderRadius="md" borderWidth="1px" _hover={{ bg: "gray.400" }} _expanded={{ bg: "blue.400" }} _focus={{ boxShadow: "outline" }}>
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open...</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {isOpen ? "Open" : "Close"}
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem onClick={() => alert("main copy copy aja")}>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
              <MenuDivider />
              <MenuItem color="red">Delete</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};
