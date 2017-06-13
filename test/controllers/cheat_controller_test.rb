require 'test_helper'

class CheatControllerTest < ActionDispatch::IntegrationTest
  test "should get description:text" do
    get cheat_description:text_url
    assert_response :success
  end

  test "should get start_point_lat:float" do
    get cheat_start_point_lat:float_url
    assert_response :success
  end

  test "should get start_point_long:float" do
    get cheat_start_point_long:float_url
    assert_response :success
  end

  test "should get end_point_lat:float" do
    get cheat_end_point_lat:float_url
    assert_response :success
  end

  test "should get end_point_long:float" do
    get cheat_end_point_long:float_url
    assert_response :success
  end

  test "should get user_id:integer" do
    get cheat_user_id:integer_url
    assert_response :success
  end

  test "should get rating:integer" do
    get cheat_rating:integer_url
    assert_response :success
  end

end
