export default function Dashboard() {
  return (
    <main className="relative w-full overflow-auto rounded-l-2xl bg-background">
      <div className="grid h-screen max-h-[75rem] min-h-[50rem] grid-cols-12 grid-rows-10 gap-4 p-4 max-md:h-auto max-md:max-h-none max-md:grid-rows-none max-md:gap-y-10 max-md:py-6">
        <div className="col-span-full row-span-1">
          <div className="box border size-full overflow-hidden">
            <div className="flex size-full items-start justify-between gap-3 max-md:flex-col md:items-center">
              header
            </div>
          </div>
        </div>

        {/* <div className="col-span-3 row-span-2 max-md:col-span-full">
          <div className="box border border-none">
            <div className="flex size-full flex-col justify-start gap-5">2</div>
          </div>
        </div>
        <div className="col-span-3 row-span-2 max-md:col-span-full">
          <div className="box border border-none">
            <div className="flex size-full flex-col justify-start gap-5">2</div>
          </div>
        </div>

        <div className="col-span-3 row-span-2 max-md:col-span-full">
          <div className="box border border-none">
            <div className="flex size-full flex-col justify-start gap-5">2</div>
          </div>
        </div>

        <div className="col-span-3 row-span-2 max-md:order-1 max-md:col-span-full">
          <div className="box border">
            <div className="size-full overflow-visible">2</div>
          </div>
        </div> */}

        {/* Left column */}
        <div className="col-span-6 row-span-8 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4">
          <div className="col-span-6 row-span-8 max-md:col-span-full">
            <div className="box border size-full overflow-hidden">
              <div className="size-full">left</div>
            </div>
          </div>

          {/* <div className='col-span-3 row-span-5 max-md:col-span-4 max-md:col-span-full'>
              <div className='box border size-full overflow-hidden'>3</div>
            </div> */}

          {/* <div className='col-span-8 row-span-4 max-md:col-span-full max-md:min-h-[20rem] max-md:col-span-full'>
              <div className='box border size-full overflow-hidden flex gap-2'>
                <div className='relative z-10 size-full overflow-hidden'>
                  <div className='hide-scrollbar flex h-full gap-2 overflow-y-auto max-md:overflow-y-visible'>a</div>
                  <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-background/0 to-background/50'></div>
                </div>
              </div>
            </div> */}
        </div>

        <div className="col-span-6 row-span-8 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4">
          <div className="col-span-6 row-span-4 max-md:col-span-full">
            <div className="box border size-full overflow-hidden rounded-none">
              <div className="relative flex size-full flex-col justify-center gap-2 overflow-hidden">
                right-top
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-4 max-md:col-span-full">
            <div className="box border size-full overflow-hidden rounded-none">
              <div className="relative flex size-full flex-col justify-center gap-2 overflow-hidden">
                right-btm-left
              </div>
            </div>
          </div>
          <div className="col-span-3 row-span-4 max-md:col-span-full">
            <div className="box border size-full overflow-hidden rounded-none">
              <div className="relative flex size-full flex-col justify-center gap-2 overflow-hidden">
                right-btm-right
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full row-span-1">
          <div className="box border size-full overflow-hidden">
            <div className="flex size-full items-start justify-between gap-3 max-md:flex-col md:items-center">
              dock
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
