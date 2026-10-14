import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Chunk } from "@/components/grid/Chunk"

import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

export function Admin() {
  const chunks = Array.from({length:56},(e,i)=>i + 1)

  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <Collapsible >
                <SidebarMenuItem>
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton>
                      <span>Componentes</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <a href="#">
                            <span>Button</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          Card
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <SidebarMenuItem>
                <SidebarMenuButton>Pagina</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="grid grid-cols-8 grid-flow-row-dense bg-muted/50 md:min-h-min w-full h-4/5 p-1">
            {chunks.map(c => (
              <Chunk index={c} />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Admin