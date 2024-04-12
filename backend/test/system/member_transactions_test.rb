require "application_system_test_case"

class MemberTransactionsTest < ApplicationSystemTestCase
  setup do
    @member_transaction = member_transactions(:one)
  end

  test "visiting the index" do
    visit member_transactions_url
    assert_selector "h1", text: "Member transactions"
  end

  test "should create member transaction" do
    visit member_transactions_url
    click_on "New member transaction"

    fill_in "Amount", with: @member_transaction.amount
    fill_in "Type", with: @member_transaction.type
    click_on "Create Member transaction"

    assert_text "Member transaction was successfully created"
    click_on "Back"
  end

  test "should update Member transaction" do
    visit member_transaction_url(@member_transaction)
    click_on "Edit this member transaction", match: :first

    fill_in "Amount", with: @member_transaction.amount
    fill_in "Type", with: @member_transaction.type
    click_on "Update Member transaction"

    assert_text "Member transaction was successfully updated"
    click_on "Back"
  end

  test "should destroy Member transaction" do
    visit member_transaction_url(@member_transaction)
    click_on "Destroy this member transaction", match: :first

    assert_text "Member transaction was successfully destroyed"
  end
end
