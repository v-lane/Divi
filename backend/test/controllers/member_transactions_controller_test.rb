require "test_helper"

class MemberTransactionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @member_transaction = member_transactions(:one)
  end

  test "should get index" do
    get member_transactions_url
    assert_response :success
  end

  test "should get new" do
    get new_member_transaction_url
    assert_response :success
  end

  test "should create member_transaction" do
    assert_difference("MemberTransaction.count") do
      post member_transactions_url, params: { member_transaction: { amount: @member_transaction.amount, type: @member_transaction.type } }
    end

    assert_redirected_to member_transaction_url(MemberTransaction.last)
  end

  test "should show member_transaction" do
    get member_transaction_url(@member_transaction)
    assert_response :success
  end

  test "should get edit" do
    get edit_member_transaction_url(@member_transaction)
    assert_response :success
  end

  test "should update member_transaction" do
    patch member_transaction_url(@member_transaction), params: { member_transaction: { amount: @member_transaction.amount, type: @member_transaction.type } }
    assert_redirected_to member_transaction_url(@member_transaction)
  end

  test "should destroy member_transaction" do
    assert_difference("MemberTransaction.count", -1) do
      delete member_transaction_url(@member_transaction)
    end

    assert_redirected_to member_transactions_url
  end
end
