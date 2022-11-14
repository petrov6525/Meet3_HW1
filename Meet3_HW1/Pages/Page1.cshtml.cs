using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Meet3_HW1.Pages
{
    [IgnoreAntiforgeryToken]
    public class Page1Model : PageModel
    {
        public void OnGet()
        {

        }

        public void OnPost()
        {
            var correct = Request.Form["Correct"];

            Console.WriteLine(correct.Count);
        }
    }
}
