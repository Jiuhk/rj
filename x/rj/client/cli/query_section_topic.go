package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"rj/x/rj/types"
)

func CmdListSectionTopic() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-section-topic",
		Short: "list all sectionTopic",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSectionTopicRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SectionTopicAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowSectionTopic() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-section-topic [section-id]",
		Short: "shows a sectionTopic",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argSectionId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetSectionTopicRequest{
				SectionId: argSectionId,
			}

			res, err := queryClient.SectionTopic(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
