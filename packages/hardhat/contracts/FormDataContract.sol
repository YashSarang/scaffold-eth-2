// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FormDataContract {
    struct FormData {
        string FullName;
        string Location;
        // Add more fields as needed
    }

    mapping(uint256 => FormData) formData;

    event FormDataStored(uint256 indexed formId, string FullName, string Location);

    function storeFormData(string memory _FullName, string memory _Location) external {
        uint256 formId = uint256(keccak256(abi.encodePacked(msg.sender, block.timestamp)));
        formData[formId] = FormData(_FullName, _Location);
        emit FormDataStored(formId, _FullName, _Location);
    }

    function getFormData(uint256 _formId) external view returns (string memory, string memory) {
        return (formData[_formId].FullName, formData[_formId].Location);
    }
}
