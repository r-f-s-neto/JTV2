import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "./page";
import { AppRouterContextProviderMock } from "@/__tests__/__mocks__/app-router-context-provider-mock";

describe("Home tests", () => {
  it("should return tickets based on the tickets names", async () => {
    render(<Page />, {
      wrapper: AppRouterContextProviderMock,
    });

    const searchedValue = "Museu de Arte Moderna";
    const SearchInput = screen.getByTestId("search-input");
    await userEvent.type(SearchInput, `${searchedValue}{enter}`);

    const TicketsLoading = screen.queryByTestId("loading-products");
    if (TicketsLoading) {
      await waitForElementToBeRemoved(TicketsLoading);
    }

    await waitFor(
      () => {
        const TicketName = screen.getByTestId("ticket-name");
        expect(TicketName).toHaveTextContent(searchedValue);
      },
      { timeout: 10000 }
    );
  });

  it("should return tickets based on the tickets location", async () => {
    render(<Page />, {
      wrapper: AppRouterContextProviderMock,
    });

    const searchedValue = "Roma, Itália";
    const SearchInput = screen.getByTestId("search-input");
    await userEvent.type(SearchInput, `${searchedValue}{enter}`);

    const TicketsLoading = screen.queryByTestId("loading-products");
    if (TicketsLoading) {
      await waitForElementToBeRemoved(TicketsLoading);
    }

    await waitFor(
      () => {
        const TicketLocation = screen.getByTestId("ticket-location");
        expect(TicketLocation).toHaveTextContent(searchedValue);
      },
      { timeout: 10000 }
    );
  });
});
