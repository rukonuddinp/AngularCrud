using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace StatinaryProject.Migrations
{
    public partial class check1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Shop_Information",
                columns: table => new
                {
                    Shop_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Shop_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MobileNo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },

                constraints: table =>

                {
                    table.PrimaryKey("PK_Shop_Information", x => x.Shop_Id);
                });

            migrationBuilder.CreateTable(
                name: "Product_Information",
                columns: table => new
                {
                    Product_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Product_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quantity = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<int>(type: "int", nullable: false),
                    IsAvailable = table.Column<bool>(type: "bit", nullable: false),
                    OrderDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Shop_Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product_Information", x => x.Product_Id);
                    table.ForeignKey(
                        name: "FK_Product_Information_Shop_Information_Shop_Id",
                        column: x => x.Shop_Id,
                        principalTable: "Shop_Information",
                        principalColumn: "Shop_Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Product_Information_Shop_Id",
                table: "Product_Information",
                column: "Shop_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Product_Information");

            migrationBuilder.DropTable(
                name: "Shop_Information");
        }
    }
}
