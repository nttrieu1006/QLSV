using Microsoft.AspNet.Identity;
using Model;
using QLSV.Infrastructure;
using QLSV.ViewModel;
using System.Linq;
using System.Web.Http;

namespace QLSV.Controllers
{
    public class AccountController : ApiController
    {
        private ApplicationUserManager _userManager;
        private ApplicationRoleManager _roleManager;
        private ApiDbContext db;

        public AccountController(ApplicationUserManager userManager, ApplicationRoleManager roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            db = new ApiDbContext();
        }

        [HttpPost]
        public IHttpActionResult CreateUser(CreateAccountModel acc)
        {
            IHttpActionResult httpActionResult;

            Account account = new Account()
            {
                UserName = acc.username,
                Email = acc.email,
            };

            IdentityResult result = _userManager.Create(account, acc.password);
            if (!result.Succeeded)
            {
                ErrorModel error = new ErrorModel();

                error.errors = result.Errors.ToList();

                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.BadRequest, error);
            }
            else
            {
                var result_2 = _userManager.AddToRole(account.Id, "User");

                if (!result_2.Succeeded)
                {
                    ErrorModel error = new ErrorModel();

                    error.errors = result.Errors.ToList();

                    httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.BadRequest, error);
                }
                else
                {
                    AccountModel accountModel = new AccountModel(account);

                    httpActionResult = Ok(accountModel);
                }
            }

            return httpActionResult;
        }
    }
}