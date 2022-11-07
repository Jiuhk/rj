package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateTopic = "create_topic"

var _ sdk.Msg = &MsgCreateTopic{}

func NewMsgCreateTopic(creator string, sectionId uint64, title string) *MsgCreateTopic {
	return &MsgCreateTopic{
		Creator:   creator,
		SectionId: sectionId,
		Title:     title,
	}
}

func (msg *MsgCreateTopic) Route() string {
	return RouterKey
}

func (msg *MsgCreateTopic) Type() string {
	return TypeMsgCreateTopic
}

func (msg *MsgCreateTopic) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTopic) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTopic) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
