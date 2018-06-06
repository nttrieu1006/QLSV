﻿using Autofac;
using Autofac.Integration.WebApi;
using QLSV.Modules;
using System.Reflection;
using System.Web.Http;

namespace QLSV
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterModule(new EFModule());
            config.DependencyResolver = new AutofacWebApiDependencyResolver(builder.Build());
        }
    }
}