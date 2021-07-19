module ImageHelper
  def profile_photo(user)
    if user.photo.attached?
      cl_image_tag(user.photo.key, class: "user-image", alt: "test", width: 100, height: 100)
    else
      image_tag("default.png", class: "user-image", alt: "test", width: 100, height: 100)
    end
  end

  def navbar_photo(user)
    if user.photo.attached?
      cl_image_tag user.photo.key, class: "avatar dropdown-toggle", id: "navbarDropdown",
        data: { toggle: "dropdown" }, 'aria-haspopup': true, 'aria-expanded': false
    else
      image_tag "default.png",class: "avatar dropdown-toggle", id: "navbarDropdown",
        data: { toggle: "dropdown" }, 'aria-haspopup': true, 'aria-expanded': false
    end
  end
end
