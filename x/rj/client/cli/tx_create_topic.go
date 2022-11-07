package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"rj/x/rj/types"
)

var _ = strconv.Itoa(0)

func CmdCreateTopic() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-topic [section-id] [title]",
		Short: "Broadcast message createTopic",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argSectionId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argTitle := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateTopic(
				clientCtx.GetFromAddress().String(),
				argSectionId,
				argTitle,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
