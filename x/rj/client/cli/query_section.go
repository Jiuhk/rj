package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"rj/x/rj/types"
)

func CmdListSection() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-section",
		Short: "list all section",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSectionRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SectionAll(context.Background(), params)
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

func CmdShowSection() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-section [section-id]",
		Short: "shows a section",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argSectionId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryGetSectionRequest{
				SectionId: argSectionId,
			}

			res, err := queryClient.Section(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
