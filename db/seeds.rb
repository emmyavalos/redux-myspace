@user = User.first

5.times do
  @user.posts.create(title: 'Things to Share', body: 'This is content')
end

puts 'DATA seeded'
