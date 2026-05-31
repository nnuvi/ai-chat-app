import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Badge,
  Bot,
  Calendar,
  Home,
  Inbox,
  MessageSquare,
  MessageSquarePlus,
  Search,
  Settings,
  Zap,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const mainNav = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const recentChats = [
  { title: "Fix CI/CD deploy error", url: "#", icon: MessageSquare },
  { title: "Postgres vs SQLite", url: "#", icon: MessageSquare },
];

const yesterdaysChats = [
  { title: "Image resize in Django", url: "#", icon: MessageSquare },
];

const last7DaysChats = [
  { title: "Build Todo App", url: "#", icon: MessageSquare },
  { title: "Navbar with CSS Modules", url: "#", icon: MessageSquare },
];

export function AppSidebar() {
  console.log("AppSidebar rendered");
  return (
    <Sidebar className="bg-background text-foreground border-r">
      <SidebarContent className="flex flex-col justify-between h-full">
        <div>
          {/* Main Nav */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pt-4 pb-2">
              Main Menu
              <Badge
                // variant="secondary"
                className="ml-2 text-[10px] px-1.5 py-0.5"
              >
                Pro
              </Badge>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNav.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <Link
                        to={item.url}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition"
                      >
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <div className="px-4 pt-4">
            <Button
              variant="secondary"
              className="w-full justify-start cursor-pointer gap-2"
            >
              <Link to="/chats/new" className="flex items-center gap-2 w-full">
                <MessageSquarePlus className="w-4 h-4" />
                New Chat
              </Link>
            </Button>
          </div>

          {/* Recent Chats */}
          {recentChats.length == 0 || (
            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pb-2">
                Recent Chats
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {recentChats.map((chat) => (
                    <SidebarMenuItem key={chat.id}>
                      <NavLink to={`chats/${chat.id}`}>
                        {({ isActive }) => (
                          <SidebarMenuButton
                            className={cn(
                              "flex items-center gap-3 px-4 py-2 rounded-md transition cursor-pointer",
                              isActive ? "bg-muted" : "hover:bg-muted",
                            )}
                          >
                            <MessageSquare className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm truncate">
                              {chat.title[0] == "'" || chat.title[0] == '"'
                                ? chat.title.slice(1, -1)
                                : chat.title}
                            </span>
                          </SidebarMenuButton>
                        )}
                      </NavLink>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Yesterday */}
          {yesterdaysChats.length == 0 || (
            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pb-2">
                Yesterday
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {yesterdaysChats.map((chat) => (
                    <SidebarMenuItem key={chat.title}>
                      <NavLink to={`chats/${chat.id}`}>
                        {({ isActive }) => (
                          <SidebarMenuButton
                            className={cn(
                              "flex items-center gap-3 px-4 py-2 rounded-md transition cursor-pointer",
                              isActive ? "bg-muted" : "hover:bg-muted",
                            )}
                          >
                            <MessageSquare className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm truncate">
                              {chat.title[0] == "'" || chat.title[0] == '"'
                                ? chat.title.slice(1, -1)
                                : chat.title}
                            </span>
                          </SidebarMenuButton>
                        )}
                      </NavLink>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Last 7 Days */}
          {last7DaysChats.length == 0 || (
            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pb-2">
                Last 7 Days
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {last7DaysChats.map((chat) => (
                    <SidebarMenuItem key={chat.title}>
                      <NavLink to={`chats/${chat.id}`}>
                        {({ isActive }) => (
                          <SidebarMenuButton
                            className={cn(
                              "flex items-center gap-3 px-4 py-2 rounded-md transition cursor-pointer",
                              isActive ? "bg-muted" : "hover:bg-muted",
                            )}
                          >
                            <MessageSquare className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm truncate">
                              {chat.title[0] == "'" || chat.title[0] == '"'
                                ? chat.title.slice(1, -1)
                                : chat.title}
                            </span>
                          </SidebarMenuButton>
                        )}
                      </NavLink>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Explore GPTs */}
          <SidebarGroup className="mt-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link
                    to="#"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition"
                  >
                    <Bot className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-semibold">Explore GPTs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </div>

        {/* Upgrade CTA */}
        <div className="p-4 border-t">
          <Link
            to="#"
            className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Upgrade to Pro
            </span>
            <Badge className="text-[10px] px-1.5 py-0.5">New</Badge>
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
