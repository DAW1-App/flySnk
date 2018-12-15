module ApplicationHelper

  def current?(test_path)
    return ' current' if request.path == test_path
    ''
  end

end
