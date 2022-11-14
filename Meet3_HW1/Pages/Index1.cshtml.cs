using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Meet3_HW1.Pages
{
    [IgnoreAntiforgeryToken]
    public class Index1Model : PageModel
    {

        public void OnGet()
        {

        }

        public IActionResult OnPost()
        {
            var checkbox = Request.Form["Subscribe"];
            string? email = Request.Form["Email"];


            if (checkbox == "on")
            {
                return RedirectToPage("Hello",new{ name=email});
            }
            else return Page();
        }
    }
}
