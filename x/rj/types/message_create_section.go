package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateSection = "create_section"

var _ sdk.Msg = &MsgCreateSection{}

func NewMsgCreateSection(creator string, name string) *MsgCreateSection {
	return &MsgCreateSection{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgCreateSection) Route() string {
	return RouterKey
}

func (msg *MsgCreateSection) Type() string {
	return TypeMsgCreateSection
}

func (msg *MsgCreateSection) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSection) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSection) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
