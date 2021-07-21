function update()
{
    if(i > numbers_of_family_members_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
    console.log(i);
}